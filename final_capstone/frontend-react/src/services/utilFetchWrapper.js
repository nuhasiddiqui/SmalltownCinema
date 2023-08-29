
//export default function useFetchWrapper() {
export { utilFetchWrapper };
const baseUrl = 'http://localhost:9000/api';  // be sure port matches server port
//const baseUrl = process.env.REMOTE_API;


function utilFetchWrapper () {

    return {
        get: request('GET'),
        post: request('POST'),
        put: request('PUT'),
        delete: request('DELETE')
    };
    
    function request(method) {                
        return (url, body) => {
            const fullUrl = baseUrl + url;
            let requestOptions = {
                method : method,
                mode: 'cors',
                credentials: 'same-origin',
                headers: {  'Content-Type': 'application/json'}
            };
            requestOptions = authHeader(requestOptions);
            if (body) {
                requestOptions.headers['Content-Type'] = 'application/json';
                requestOptions.body = JSON.stringify(body);
            }
            return fetch(fullUrl, requestOptions)
            .then(handleResponse)
        };
    }
    
    // helper functions
    
    function authHeader(requestOptions) {
        // return auth header with jwt if user is logged in and request is to the api url
        const token = localStorage.getItem('token');
        
        if (token) {
            requestOptions.headers['Authorization'] = `Bearer ${token}`;
        }
        return requestOptions;
    }
    
    function handleResponse(response) {
        return response.text().then(text => {
            const data = text && JSON.parse(text);
            
            if (!response.ok) {
                if ([401, 403].includes(response.status) ) {
                    // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    //set context for user to null
                    //send to login page
                    //history.push('/login');
                }
    
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
    
            return data;
        });
    }    
}
 
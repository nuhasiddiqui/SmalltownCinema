import { UserProvider } from './context/UserContext';
import ErrorBoundary from './ErrorBoundary';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Option1 from './pages/Options/Option1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Option2 from './pages/Options/Option2';


const MyApp = () => {  

  return (
    
    <div className="wrapper">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Option1" element={<Option1 />} />
              <Route path="/Option2" element={<Option2 />} />
          {/* <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="*" element={<NoMatch />} /> */}
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ErrorBoundary>
    </div>
  );
}

export default MyApp;
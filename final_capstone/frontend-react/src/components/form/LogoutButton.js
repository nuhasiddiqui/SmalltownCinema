import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import Button from "../ui/Button";



const LogoutButton = () => {
  const userContext = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);
  const currentUser = userContext.currentUser;
    if (!currentUser || !currentUser.isAuthenticated) {
      return <></>;
    }
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');        
      setCurrentUser({});
    }
    return (
      <Button onClick={handleLogout}>Log out {currentUser.username}</Button>
    );
  }

  export default LogoutButton;
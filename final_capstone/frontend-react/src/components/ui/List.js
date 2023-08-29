import { useContext } from "react";
import { UserContext } from "../../context/UserContext"

const List = ({ children }) => {
    const userContext = useContext(UserContext);
    const currentUser = userContext.currentUser;
    return (
        <>
        {
            (currentUser) && 
            <span>{currentUser.name}</span>
        }
        </>
    );
  }

  export default List;
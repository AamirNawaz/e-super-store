import { Redirect } from "react-router-dom";

function UserLogout() {
    localStorage.removeItem('RoutePath');
    return <Redirect to="/user/login" />
}

export default UserLogout;
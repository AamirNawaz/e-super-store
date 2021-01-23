import { Redirect } from "react-router-dom";

function UserLogout() {
    return <Redirect to="/user/login" />
}

export default UserLogout;
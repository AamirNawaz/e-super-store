import { Redirect } from "react-router-dom";

function Logout (){
    return <Redirect to="/admin/login" />
}

export default Logout;
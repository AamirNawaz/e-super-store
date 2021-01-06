import React from 'react';
import { Link } from 'react-router-dom';

class UserLogin extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return (
            <React.Fragment>
            <section className="section-conten padding-y" style={{minHeight: '84vh'}}>
                <div className="card mx-auto" style={{maxWidth: 380, marginTop: 100}}>
                    <div className="card-body">
                    <h4 className="card-title mb-4">Sign in</h4>
                    <form>
                        <div className="form-group">
                        <input name className="form-control" placeholder="Username" type="text" />
                        </div> 
                        <div className="form-group">
                        <input name className="form-control" placeholder="Password" type="password" />
                        </div> 
                        <div className="form-group">
                        <Link to="/user/forgot-password" className="float-right">Forgot password?</Link> 
                        <label className="float-left custom-control custom-checkbox"> <input type="checkbox" className="custom-control-input" defaultChecked /> <div className="custom-control-label"> Remember </div> </label>
                        </div> 
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Login</button>
                        </div> 
                    </form>
                    </div> 
                </div> 
                <p className="text-center mt-4">Don't have account? <Link to="/user/register">Sign up</Link></p>
                <br /><br />
                </section>
            </React.Fragment>
        )
    }
}

export default UserLogin;
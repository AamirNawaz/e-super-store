import React from 'react';

class SubscribeNewsLater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value,
        })



    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.email);
    }

    render() {

        return (
            <React.Fragment>
                {/* ========================= SECTION SUBSCRIBE  ========================= */}
                <section className="padding-y-lg bg-light border-top">
                    <div className="container">
                        <p className="pb-2 text-center">Delivering the latest product trends and industry news straight to your inbox</p>
                        <div className="row justify-content-md-center">
                            <div className="col-lg-4 col-sm-6">
                                <form className="form-row">
                                    <div className="col-8">
                                        <input className="form-control" placeholder="Your Email" name="email" type="email" onChange={(e) => this.handleChange(e)} />
                                    </div>
                                    <div className="col-4">
                                        <button onClick={(event) => this.handleSubmit(event)} className="btn btn-block btn-warning"> <i className="fa fa-envelope" /> Subscribe </button>
                                    </div>
                                </form>
                                <small className="form-text">We’ll never share your email address with a third-party. </small>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========================= SECTION SUBSCRIBE END// ========================= */}

            </React.Fragment>
        )
    }
}

export default SubscribeNewsLater;
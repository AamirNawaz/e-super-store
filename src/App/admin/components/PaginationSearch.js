import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<React.Fragment>
            <div className="row mb-2" >
                <div className="col-md-2" >
                    {this.props.addBtn ? (
                        <Link to={this.props.link} onClick={this.props.onClick} className="btn btn-primary">{this.props.addBtn}</Link>
                    ) : ('')
                    }

                    {this.props.children ? (
                        <button onClick={this.props.onClick} className="btn btn-primary">{this.props.children}</button>
                    ) : ('')}
                </div>
                <div className="col-md-2 offset-md-6">
                    <input style={{ borderRadius: '0px' }} type="text" className="form-control" placeholder={this.props.placeholder} />
                </div>
                <div className="col-md-2" style={{ marginLeft: '-20px' }}>
                    <button style={{ borderRadius: '0px' }} className="btn btn-primary">Search</button>
                </div>
            </div>
        </React.Fragment>);
    }
}

export default Search;
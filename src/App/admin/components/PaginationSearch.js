import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <React.Fragment>
              <div className="row mb-2" >
                  <div className="col-md-2">
                    {this.props.addBtn ? (
                  <Link to={this.props.link} className="btn btn-primary">{this.props.addBtn}</Link>
                    ) :('')
                    }
                  </div>
                        <div className="col-md-2 offset-md-6">
                            <input type="text" className="form-control" placeholder={this.props.placeholder} />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
        </React.Fragment> );
    }
}
 
export default Search;
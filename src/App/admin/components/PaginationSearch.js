import React from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {
    return (<React.Fragment>
        <div className="col-md-2" >
            {props.addBtn ? (
                <Link to={props.link} onClick={props.onClick} className="btn btn-primary">{props.addBtn}</Link>
            ) : ('')
            }

            {props.children ? (
                <button onClick={props.onClick} className="btn btn-primary">{props.children}</button>
            ) : ('')}
        </div>


    </React.Fragment>);

}

export default Search;
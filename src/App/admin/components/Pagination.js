import React from 'react';
import { Link } from 'react-router-dom';
function Pagination(props){
    return(
        <React.Fragment>
              <tr>
                                    <td>Showing 5 out {props.RecordCount}</td>
                           <td colSpan={props.colSpan}>
                                <nav aria-label="Page navigation example" style={{float:'right'}}>
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="/admin/users">Previous</Link></li>
                                    <li className="page-item active"><Link className="page-link" to="/admin/users">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/admin/users">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/admin/users">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/admin/users">Next</Link></li>
                                </ul>
                                </nav>
                                </td>
                              
                            </tr>
        </React.Fragment>
    )
}

export default Pagination;
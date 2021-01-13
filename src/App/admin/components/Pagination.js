import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
function Pagination(props) {
    const { recordCount, pageSize, onPageChange, currentPage, NextPage, PreviousPage, Url, totalCount } = props;
    const pagesCount = Math.ceil(recordCount / pageSize);

    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <React.Fragment>
            <tr>
                <td>Showing {totalCount} out {recordCount} records</td>
                <td colSpan={props.colSpan}>
                    <nav aria-label="Page navigation example" style={{ float: 'right' }}>
                        <ul className="pagination">
                            <li onClick={PreviousPage} className="page-item"><Link className="page-link" to={Url}>Previous</Link></li>
                            {pages.map(page => (
                                <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
                                    <Link className="page-link" to={Url} onClick={() => onPageChange(page)}>{page}</Link>
                                </li>
                            ))}
                            <li onClick={NextPage} className="page-item"><Link className="page-link" to={Url}>Next</Link></li>
                        </ul>
                    </nav>
                </td>

            </tr>
        </React.Fragment>
    )
}

export default Pagination;
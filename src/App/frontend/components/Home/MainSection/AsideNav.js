import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function AsideNav(props) {
    const { categories } = props;
    return (

        <React.Fragment>
            <aside className="col-lg col-md-3 flex-lg-grow-0">
                <nav className="nav-home-aside">
                    <h6 className="title-category">MY MARKETS <i className="d-md-none icon fa fa-chevron-down" /></h6>
                    <ul className="menu-category">
                        {categories && categories.length ? (
                            categories.map((category, index) => {
                                return (
                                    <li key={index}><Link to={`/shope-products`}>{category.name}</Link></li>
                                )
                            })
                        ) : ('')}

                        {/* <li><a href="/">Automobile and motors</a></li>
                        <li><a href="/">Digital goods</a></li>
                        <li className="has-submenu"><a href="/">More items</a>
                            <ul className="submenu">
                                <li><a href="/">Submenu name</a></li>
                                <li><a href="/">Great submenu</a></li>
                                <li><a href="/">Another menu</a></li>
                                <li><a href="/">Some others</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </nav>
            </aside> {/* col.// */}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categoryReducer.categories
    }
}

export default connect(mapStateToProps)(AsideNav);
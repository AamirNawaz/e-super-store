import React from 'react'

export default function AsideNav() {
    return (
        <React.Fragment>
            <aside className="col-lg col-md-3 flex-lg-grow-0">
                <nav className="nav-home-aside">
                    <h6 className="title-category">MY MARKETS <i className="d-md-none icon fa fa-chevron-down" /></h6>
                    <ul className="menu-category">
                        <li><a href="/">Fashion and clothes</a></li>
                        <li><a href="/">Automobile and motors</a></li>
                        <li><a href="/">Gardening and agriculture</a></li>
                        <li><a href="/">Electronics and tech</a></li>
                        <li><a href="/">Packaginf and printing</a></li>
                        <li><a href="/">Home and kitchen</a></li>
                        <li><a href="/">Digital goods</a></li>
                        <li className="has-submenu"><a href="/">More items</a>
                            <ul className="submenu">
                                <li><a href="/">Submenu name</a></li>
                                <li><a href="/">Great submenu</a></li>
                                <li><a href="/">Another menu</a></li>
                                <li><a href="/">Some others</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside> {/* col.// */}
        </React.Fragment>
    )
}

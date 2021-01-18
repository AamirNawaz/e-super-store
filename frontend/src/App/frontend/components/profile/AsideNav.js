import React from 'react';
import { Link } from 'react-router-dom';

function AsideNav() {
    return (
        <React.Fragment>
            <aside className="col-md-3">
                <nav className="list-group">
                    <Link className="list-group-item active" to="/profile"> Account overview</Link>
                    <Link className="list-group-item " to="/profile-address"> My Address </Link>
                    <Link className="list-group-item" to="/profile-orders"> My Orders </Link>
                    <Link className="list-group-item" to="/profile-wishlist"> My wishlist </Link>
                    <Link className="list-group-item" to="/profile-setting"> Settings </Link>
                    <Link className="list-group-item" to="/profile-logout"> Log out </Link>
                </nav>
            </aside> {/* col.// */}
        </React.Fragment>
    )
}

export default AsideNav;
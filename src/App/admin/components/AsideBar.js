import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../redux/reducer/Auth/authActions';
function AsideBar(props) {
   return (
      <React.Fragment>
         <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
               <div className="nav">
                  <div className="sb-sidenav-menu-heading">Core</div>
                  <Link className="nav-link" to="/admin/dashboard">
                     <div className="sb-nav-link-icon">
                        <i className="fas fa-tachometer-alt" />
                     </div>
            Dashboard
            </Link>
                  <Link className="nav-link" to="/">
                     <div className="sb-nav-link-icon">
                        <i className="fas fa-tv" />
                     </div>
            Frontend
            </Link>
                  <div className="sb-sidenav-menu-heading">Interface</div>
                  <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#productLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                     <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
               Products
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="productLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/product-list">
                           Products</Link>
                     </nav>
                  </div>
                  <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#categoryLayout" aria-expanded="false" aria-controls="collapseLayouts">
                     <div className="sb-nav-link-icon"><i className="fas fa-list" /></div>
               Categories
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="categoryLayout" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/categories-list">
                           Categories List</Link>
                     </nav>
                  </div>

                  {/* Users */}
                  <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#usersLayout" aria-expanded="false" aria-controls="collapseLayouts">
                     <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
               Users
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="usersLayout" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/admin/users">
                           Users List</Link>
                     </nav>
                  </div>

                  <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                     <div className="sb-nav-link-icon"><i className="fas fa-book-open" /></div>
               Pages
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                        <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                           Authentication
                     <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                        </a>
                        <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                           <nav className="sb-sidenav-menu-nested nav">
                              <a className="nav-link" href="login.html">Login</a>
                              <a className="nav-link" href="register.html">Register</a>
                              <a className="nav-link" href="password.html">Forgot Password</a>
                           </nav>
                        </div>
                        <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                           Error
                     <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                        </a>
                        <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                           <nav className="sb-sidenav-menu-nested nav">
                              <a className="nav-link" href="401.html">401 Page</a>
                              <a className="nav-link" href="404.html">404 Page</a>
                              <a className="nav-link" href="500.html">500 Page</a>
                           </nav>
                        </div>
                     </nav>
                  </div>
                  <div className="sb-sidenav-menu-heading">Logout</div>

                  <Link className="nav-link" to="/admin/logout" onClick={() => props.logoutBtn()}>
                     <div className="sb-nav-link-icon"><i className="fas fa-sign-out-alt"></i></div>
               Logout
            </Link>
               </div>
            </div>
            <div className="sb-sidenav-footer">
               <div className="small">Logged in as:</div>
         Start Bootstrap
      </div>
         </nav>
      </React.Fragment>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      logoutBtn: () => dispatch(userLogout())
   }
}
export default connect(null, mapDispatchToProps)(AsideBar);

import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { userLogout } from '../../redux/reducer/Auth/authActions';
function AsideBar(props) {
   const [active, setActive] = useState('');
   const [userName, setUserName] = useState('');

   useEffect(() => {
      const url = props.match.url;
      if (url === "/admin/dashboard") {
         setActive('dashboard');
      }
      else if (url === "/admin/product-list") {
         setActive('products');
      }
      else if (url === "/admin/categories-list") {
         setActive('categories');

      } else if (url === "/admin/users") {
         setActive('users');
      }
   }, [props.match.url]);

   useEffect(() => {
      if (props.auth.authToken) {
         const decode = jwtDecode(props.auth.authToken);
         setUserName(decode.user.name);
      }
   }, [props.auth, userName]);


   const onClickActive = async (menuItem) => {
      setActive(menuItem);

   };
   return (
      <React.Fragment>
         <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
               <div className="nav">
                  <div className="sb-sidenav-menu-heading">Core</div>
                  <Link className={active === 'dashboard' ? 'nav-link active activeNavHilighter' : 'nav-link '} onClick={() => onClickActive('dashboard')} to="/admin/dashboard">
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
                  {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
                  <a className={active === 'products' ? 'nav-link active' : 'nav-link collapsed'} href="/" data-toggle="collapse" data-target="#productLayouts" aria-expanded="false" aria-controls="productLayouts">
                     <div className="sb-nav-link-icon"><i className="fas fa-columns" /></div>
               Products
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className={active === 'products' ? 'collapse show' : 'collapse'} id="productLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav">
                        <Link className={active === 'products' ? 'nav-link active activeNavHilighter' : 'nav-link '} to="/admin/product-list">
                           Products</Link>
                     </nav>
                  </div>

                  <a className={active === 'categories' ? 'nav-link active' : 'nav-link collapsed'} href="/" data-toggle="collapse" data-target="#categoryLayout" aria-expanded="true" aria-controls="categoryLayout">
                     <div className="sb-nav-link-icon"><i className="fas fa-list" /></div>
               Categories
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className={active === 'categories' ? 'collapse show' : 'collapse '} id="categoryLayout" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav">
                        <Link className={active === 'categories' ? 'nav-link active activeNavHilighter' : 'nav-link '} onClick={() => onClickActive('categories')} to="/admin/categories-list" >
                           Categories List</Link>
                     </nav>
                  </div>

                  {/* Users */}
                  <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target="#usersLayout" aria-expanded="false" aria-controls="usersLayout">
                     <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
               Users
               <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down" /></div>
                  </a>
                  <div className={active === 'users' ? 'collapse show' : 'collapse'} id="usersLayout" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                     <nav className="sb-sidenav-menu-nested nav">
                        <Link className={active === 'users' ? 'nav-link active activeNavHilighter' : 'nav-link'} to="/admin/users">
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
               {userName}
            </div>
         </nav>
      </React.Fragment>
   )
}

const mapStateToProps = (state) => {
   return {
      auth: state.auth
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      logoutBtn: () => dispatch(userLogout())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AsideBar));

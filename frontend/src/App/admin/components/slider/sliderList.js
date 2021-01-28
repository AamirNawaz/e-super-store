
import React, { Component } from 'react';
import AsideBar from '../AsideBar';
import DashboardFooter from '../DashboardFooter';
import NavTop from '../NavTop';
import Pagination from '../../../helper/Pagination';
import PaginationSearch from '../../../helper/PaginationSearch';
import paginate from '../../../helper/paginate';
import { toast, ToastContainer } from 'react-toastify';
import { userLogout } from '../../../redux/reducer/Auth/authActions';
import { sliders } from '../../../redux/reducer/slider/sliderActions';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import AddSlider from './addSlider';
import EditSlider from './editSlider';
import preloader from '../../../../App/assets/images/preloader.gif';

import '../../assets/css/search.css';


class SliderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            open: false,
            pageSize: 5,
            currentPage: 1,
            render: false
        }
    }

    componentDidMount = async () => {
        const authToken = this.props.auth;
        await this.props.fetchSliders(authToken);
        if (this.props.tokenExpire) {
            this.props.logoutCall();
            this.props.history.push('/admin/logout');
        }
        this.setState({
            render: true
        })
    }

    handleDeleteSlider = async (sliderId) => {
        const authToken = this.props.auth;
        const response = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/sliders/delete/${sliderId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }
        );

        if (response.status === 200) {
            toast.success('Slider Deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            //fetch all categories data on save
            this.props.fetchSliders(authToken);

        } else {
            toast.error('Faild to delete the slider', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }

    OpenModel = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handleNext = (event) => {
        const pagesCount = Math.ceil(this.props.categories.length / this.state.pageSize);
        if (this.state.currentPage < pagesCount)
            this.setState({
                currentPage: this.state.currentPage + 1

            });
    }

    handlePrevious = (event) => {
        if (this.state.currentPage > 1)
            this.setState({
                currentPage: this.state.currentPage - 1,
            });
    }


    handleActive = async (sliderId) => {
        const authToken = this.props.auth;
        const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/sliders/updateStatus`, {
            status: 'active',
            sliderId: sliderId
        },
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                }
            }
        );

        if (response.status === 200) {
            toast.success('Slider Deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            //fetch all categories data on save
            this.props.fetchSliders(authToken);

        } else {
            toast.error('Faild to delete the slider', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }

    handleInActive = async (sliderId) => {
        const authToken = this.props.auth;
        const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/sliders/updateStatus`, {
            status: 'InActive',
            sliderId: sliderId
        },
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                }
            }
        );

        if (response.status === 200) {
            toast.success('Slider Deleted successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })

            //fetch all categories data on save
            this.props.fetchSliders(authToken);

        } else {
            toast.error('Faild to delete the slider', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
        }
    }
    render() {
        let totalCount = 0;
        const { searchInput, currentPage, pageSize, open, render } = this.state;
        const { sliders: allSliders } = this.props;
        const sliderData = this.state.searchInput ? allSliders.filter(data => data.name === searchInput) : allSliders;
        const sliders = paginate(sliderData, currentPage, pageSize);


        return (
            <React.Fragment>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div>
                    <NavTop />
                    <div id="layoutSidenav">
                        <div id="layoutSidenav_nav">
                            <AsideBar />
                        </div>
                        <div id="layoutSidenav_content">
                            <main style={{ marginLeft: '20px', marginRight: '20px', marginTop: '55px' }}>
                                <div>
                                    <h3>Sliders List</h3>
                                    {/* Search filter */}
                                    <div className="row mb-2" >
                                        <PaginationSearch onClick={() => this.OpenModel()} placeholder="Search User" add="" >ADD Slider</PaginationSearch>
                                        <div className="col-md-3 offset-md-6">
                                            <div className="form-group has-search">
                                                <span className="fa fa-search form-control-feedback" />
                                                <input style={{ borderRadius: '0px', border: '2px solid #ff6a00' }} name="searchInput" type="text" className="form-control" placeholder={'Search category'} onChange={(event) => this.handleOnchange(event)} autoComplete="off" />
                                            </div>

                                        </div>
                                    </div>
                                    {/* Search filter */}
                                    {/* Open Model */}
                                    <AddSlider open={open} OpenModel={() => this.OpenModel()} />
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">SrNo</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">slider image</th>
                                                <th scope="col">slider Action</th>

                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        {render ? (
                                            <tbody>
                                                {sliders && sliders.length ? (
                                                    sliders.map((slider, index) => {
                                                        totalCount = (currentPage - 1) * pageSize + index + 1;
                                                        return (
                                                            <tr key={index}>
                                                                <th scope="row">{(currentPage - 1) * pageSize + index + 1}</th>
                                                                <td>{slider.name}</td>
                                                                <td><span className={slider.status === 'active' ? 'badge badge-success' : 'badge badge-danger'}>{slider.status === 'active' ? 'Active' : 'Stop'}</span></td>
                                                                <td><img src={slider.image} alt={slider.name} style={{ height: '110px', width: '220px' }} /></td>
                                                                <td>
                                                                    <button className="btn btn-success btn-sm" onClick={() => this.handleActive(slider._id)}>Active</button>
                                                                &nbsp;<button className="btn btn-danger btn-sm" onClick={() => this.handleInActive(slider._id)}>Stop</button>
                                                                </td>
                                                                <td>
                                                                    <EditSlider sliderId={slider._id} ><i className="fas fa-edit" style={{ cursor: 'pointer', color: 'blue' }}> </i></EditSlider>
                                                                &nbsp;&nbsp;| <Link to="/admin/sliders" onClick={() => this.handleDeleteSlider(slider._id)} style={{ cursor: 'pointer', color: 'red' }}><i className="fas fa-trash-alt" /></Link>
                                                                </td>

                                                            </tr>
                                                        )
                                                    })
                                                ) : (
                                                        <tr><td>No Record found.</td></tr>
                                                    )}

                                            </tbody>
                                        ) :
                                            <div style={{ marginTop: '100px', marginLeft: '580px' }}>
                                                <img src={preloader} alt=""></img><br /> &nbsp;&nbsp;&nbsp;&nbsp;Please wait....</div>
                                        }
                                    </table>
                                    <Pagination recordCount={this.props.sliders && this.props.sliders.length ? this.props.sliders.length : 0}
                                        pageSize={pageSize}
                                        currentPage={currentPage}
                                        onPageChange={this.handlePageChange}
                                        NextPage={this.handleNext}
                                        PreviousPage={this.handlePrevious}
                                        colSpan={3}
                                        Url="/admin/sliders"
                                        totalCount={totalCount} />
                                </div>
                            </main>
                            <DashboardFooter />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        sliders: state.sliderReducer.sliders,
        auth: state.auth.authToken
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSliders: (authToken) => dispatch(sliders(authToken)),
        logoutCall: () => dispatch(userLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SliderList));
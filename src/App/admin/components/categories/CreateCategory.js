import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';

class CreateCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryName: '',
            categoryStatus: '',
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSaveCategory = async (e) => {
        e.preventDefault();
        const token = this.props.auth.authToken;
        console.log('token:::', token);
        const { categoryName, categoryStatus } = this.state;
        if (categoryName && categoryStatus) {
            const data = {
                name: categoryName,
                status: categoryStatus,
            }
            const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/categories/add`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }, data);
            if (response.status === 200) {
                toast.success('Category Created successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
            } else {
                toast.error('Failed to created category!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                })
            }

        } else {
            toast.error('Category all Fields are mandatory!', {
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
        console.log(this.state);
        return (
            <React.Fragment>
                <main style={{ marginTop: '0px', marginBottom: '15px' }}>
                    <div className="container mt-5 w-75" >
                        <h3>Create Category</h3>
                        <form>
                            <div className="row">
                                <div className="col-sm-4">
                                    <label htmlFor="inputEmail4">Category Name</label>
                                    <input type="text" className="form-control" id="categoryName" name="categoryName" placeholder="Product Name" onChange={(e) => this.handleChange(e)} />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="inputState">Category status</label>
                                    <select name="categoryStatus" id="categoryStatus" className="form-control" onChange={(e) => this.handleChange(e)}>
                                        <option defaultValue>Choose status</option>
                                        <option value="active">active</option>
                                        <option value="inActive">InActive</option>
                                    </select>
                                </div>
                                <div className="form-group ml-2 mt-4">
                                    <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSaveCategory(e)}>Save</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </main>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(CreateCategory);
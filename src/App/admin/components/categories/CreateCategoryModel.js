import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import { categories } from '../../../redux/reducer/categories/categoryActions';
class CreateCategoryModel extends Component {
    constructor(props) {
        super(props);
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
        const { categoryName, categoryStatus } = this.state;
        if (!categoryName) {
            this.setState({
                categoryNameError: 'Category name is required',
            })
            // return false;
        } else {
            this.setState({
                categoryNameError: ''
            })
        }
        if (!categoryStatus) {
            this.setState({
                categoryStatusError: 'Category status is required'
            })
            return false;
        } else {
            this.setState({
                categoryStatusError: ''
            })
        }
        this.props.OpenModel();
        const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/categories/add`,
            { 'name': categoryName, 'status': categoryStatus },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });


        if (response.data.status === 200) {
            toast.success('Category Created successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
            this.setState({
                categoryName: '',
                categoryStatus: '',
                categoryNameError: '',
                categoryStatusError: ''
            })

            //fetch all categories data on save
            this.props.fetchCategories(token);

        } else {

            toast.error(response.data.message, {
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
        return (
            <React.Fragment>
                {/* Model popup */}
                <div className={`modal fade  ${this.props.open ? 'show d-block' : 'm'}`} id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">ADD Category</h5>
                                <button type="button" onClick={() => this.props.OpenModel()} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Category Name:</label>
                                        <input type="text" className="form-control" name="categoryName" placeholder="Category Name" onChange={(e) => this.handleChange(e)} />
                                        <span style={{ color: 'red' }}> {this.state.categoryNameError ? this.state.categoryNameError : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Category Status:</label>
                                        <select name="categoryStatus" value={this.state.categoryStatus} onChange={(e) => this.handleChange(e)} className="form-control" >
                                            <option defaultValue>Choose status</option>
                                            <option value="active">active</option>
                                            <option value="inActive">InActive</option>
                                        </select>
                                        <span style={{ color: 'red' }}> {this.state.categoryStatusError ? this.state.categoryStatusError : ''}</span>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => this.props.OpenModel()} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => { this.handleSaveCategory(e) }}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.open ? <div className="modal-backdrop fade show"></div> : ''}

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (authToken) => dispatch(categories(authToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategoryModel);


import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import { categories } from '../../../redux/reducer/categories/categoryActions';
class EditCategoryModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: '',
            categoryStatus: '',
            open: false
        }
    }

    componentDidMount = () => {

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdateCategory = async (e) => {
        e.preventDefault();
        const token = this.props.auth.authToken;
        const { categoryName, categoryStatus, categoryID } = this.state;
        if (!categoryName) {
            this.setState({
                categoryNameError: 'Category name is required',
            })
        } else {
            this.setState({
                categoryNameError: '',
            })
        }
        if (categoryStatus === '') {
            this.setState({
                categoryStatusError: 'Category status is required'
            })
        } else {
            this.setState({
                categoryStatusError: ''
            })
        }

        if (categoryName !== '' && categoryStatus !== '') {
            const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/categories/update`,
                { 'name': categoryName, 'status': categoryStatus, 'id': categoryID },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

            console.log('resoonse:', response);
            if (response.status === 200) {
                toast.success('Category updated successfully!', {
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
                this.closeModel();

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



    }

    // Opend editModel
    OpenModel = () => {
        //edit category
        let categoryID = this.props.categoryID;
        const editCategory = this.props.categories.find(data => data._id === categoryID);

        this.setState({
            categoryName: editCategory.name,
            categoryStatus: editCategory.status,
            categoryID: editCategory._id,
            open: !this.state.open,
        });
    };

    // Close editModel
    closeModel = () => {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        return (
            <React.Fragment>
                {/* Model popup */}
                <div className={`modal fade  ${this.state.open ? 'show d-block' : 'm'}`} id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Category</h5>
                                <button type="button" onClick={() => this.closeModel()} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Category Name:</label>
                                        <input type="text" className="form-control" value={this.state.categoryName} name="categoryName" placeholder="Category Name" onChange={(e) => this.handleChange(e)} />
                                        <span style={{ color: 'red' }}> {this.state.categoryNameError ? this.state.categoryNameError : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Category Status:</label>
                                        <select name="categoryStatus" value={this.state.categoryStatus} onChange={(e) => this.handleChange(e)} className="form-control" >
                                            <option value="">Choose status</option>
                                            <option value="active">active</option>
                                            <option value="inActive">InActive</option>
                                        </select>
                                        <span style={{ color: 'red' }}> {this.state.categoryStatusError ? this.state.categoryStatusError : ''}</span>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => this.closeModel()} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => { this.handleUpdateCategory(e) }}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children &&
                    React.cloneElement(this.props.children, {
                        onClick: () => this.OpenModel(),
                    })}

                {this.state.open ? <div className="modal-backdrop fade show"></div> : ''}

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        categories: state.categoryReducer.categories,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (authToken) => dispatch(categories(authToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryModel);


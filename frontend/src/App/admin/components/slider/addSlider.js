import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import logo_main from '../../../../../src/App/assets/images/logo_main.png';
import { sliders } from '../../../redux/reducer/slider/sliderActions';
class AddSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderName: '',
            sliderStatus: '',
            sliderImage: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSaveSlider = async (e) => {
        e.preventDefault();
        const token = this.props.auth.authToken;
        const { sliderName, sliderStatus, sliderImage } = this.state;
        if (!sliderName) {
            this.setState({
                sliderNameError: 'Slider name is required',
            })
            // return false;
        } else {
            this.setState({
                sliderNameError: ''
            })
        }
        if (!sliderStatus) {
            this.setState({
                sliderStatusError: 'Slider status is required'
            })

        } else {
            this.setState({
                sliderStatusError: ''
            })
        }

        if (!sliderImage) {
            this.setState({
                sliderImageError: 'Slider image is required'
            })
            return false;
        } else {
            this.setState({
                sliderImageError: ''
            })
        }
        this.props.OpenModel();
        const response = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/sliders/add`,
            { 'name': sliderName, 'status': sliderStatus, 'image': sliderImage },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });


        if (response.data.status === 200) {
            toast.success('Slider Created successfully!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            })
            this.setState({
                sliderName: '',
                sliderStatus: '',
                sliderImage: '',
                sliderNameError: '',
                sliderStatusError: '',
                sliderImageError: ''
            })

            //fetch all categories data on save
            // this.props.fetchCategories(token);
            this.props.fetchSliders(token);

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
                                <h5 className="modal-title" id="exampleModalLabel">ADD Slider</h5>
                                <button type="button" onClick={() => this.props.OpenModel()} className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label"> Name:</label>
                                        <input type="text" className="form-control" name="sliderName" placeholder="Slider Name" onChange={(e) => this.handleChange(e)} />
                                        <span style={{ color: 'red' }}> {this.state.sliderNameError ? this.state.sliderNameError : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label"> Status:</label>
                                        <select name="sliderStatus" value={this.state.sliderStatus} onChange={(e) => this.handleChange(e)} className="form-control" >
                                            <option defaultValue>Choose status</option>
                                            <option value="active">active</option>
                                            <option value="inActive">InActive</option>
                                        </select>
                                        <span style={{ color: 'red' }}> {this.state.sliderStatusError ? this.state.sliderStatusError : ''}</span>
                                    </div>
                                    <div className="form-group">
                                        <center> <img src={this.state.sliderImage ? this.state.sliderImage : logo_main} alt="" style={{ height: '100px', width: '190px' }}></img></center>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label"> Slider image:</label>
                                        <input type="text" className="form-control" name="sliderImage" placeholder="Slider Image url" onChange={(e) => this.handleChange(e)} />
                                        <span style={{ color: 'red' }}> {this.state.sliderImageError ? this.state.sliderImageError : ''}</span>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={() => this.props.OpenModel()} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => { this.handleSaveSlider(e) }}>Save</button>
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
        fetchSliders: (authToken) => dispatch(sliders(authToken)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSlider);


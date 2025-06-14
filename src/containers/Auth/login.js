import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import { userLoginSuccess } from '../../store/actions/userActions';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errMessage: '',
            email: '',
            redirectTo: null,
        };
    }
    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleLogin = async () => {
        this.setState({
            errMessage: '',
            redirectTo: null,
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                });
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                if (data.user.roleid === 'R1') {
                    this.props.navigate('/system');
                } else {
                    this.props.navigate('/home');
                }
            }
        } catch (e) {
            if (e.response && e.response.data) {
                this.setState({
                    errMessage: e.response.data.message
                });
            }
        }
    }
    render() {
        return (
            <div className="login-backgound">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 text-center login-text"> login</div>
                        <div className="col-12 form-group login-input">
                            <label>username</label>
                            <input type='text'
                                className="form-control"
                                placeholder="enter your username"
                                value={this.state.username}
                                onChange={(Event) => { this.handleOnchangeUsername(Event) }} />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>password</label>
                            <input type='password'
                                className="form-control"
                                placeholder="enter your password"
                                value={this.state.password}
                                onChange={(Event) => { this.handleOnchangePassword(Event) }} />
                        </div>
                        <div className="col-12" style={{ color: 'red', fontSize: '13px' }}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className="btn-login" onClick={() => { this.handleLogin() }}>log in</button>
                        </div>
                        <div className="col-12">
                            <span className="forgot-password">forgot your password?</span>
                        </div>
                        <div className="col-12 text-center mt-3">
                            Or login with
                        </div>
                        <div className="col-12 social-login">
                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-google-plus-g google"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(login);

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../services/userService';
import { languages, crud_actions } from '../../utils';
import * as actions from '../../store/actions';
import TableManageUser from './TableManageUser';
class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleidArr: [],
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            address: '',
            phone: '',
            gender: '',
            roleid: '',
            actions: '',
            editUserID: '',
        };
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : ''
            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux;
            this.setState({
                roleidArr: arrRoles,
                roleid: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : ''
            });
        }
        if (prevProps.listUsers !== this.props.listUsers) {
            let arrGenders = this.props.genderRedux;
            let arrRoles = this.props.roleRedux;
            this.setState({
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                address: '',
                phone: '',
                roleid: arrRoles && arrRoles.length > 0 ? arrRoles[0].keyMap : '',
                gender: arrGenders && arrGenders.length > 0 ? arrGenders[0].keyMap : '',
                actions: crud_actions.CREATE,
            })
        }
    }

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (isValid === false) return;
        let { actions } = this.state;
        if (actions === crud_actions.CREATE) {


            this.props.createNewUser({
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                address: this.state.address,
                phone: this.state.phone,
                roleid: this.state.roleid,
                gender: this.state.gender,

            })
        } else if (actions === crud_actions.EDIT) {
            this.props.editUserRedux({
                id: this.state.editUserID,
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                address: this.state.address,
                phone: this.state.phone,
                roleid: this.state.roleid,
                gender: this.state.gender,

            })
        }
    }
    onceChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstname', 'lastname', 'address', 'phone']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    handleEditUserParent = (user) => {
        console.log('check edit user from parent', user);
        this.setState({
            email: user.email,
            password: 'hasdpassword',
            firstname: user.firstname,
            lastname: user.lastname,
            address: user.address,
            phone: user.phone,
            roleid: user.roleid,
            gender: user.gender,
            actions: crud_actions.EDIT,
            editUserID: user.id,
        })
    }
    render() {
        let language = this.props.language;
        let genders = this.state.genderArr;
        let roles = this.state.roleidArr;
        let { email, password, firstname, lastname, address, phone, gender, roleid } = this.state;
        return (
            <div className="user-redux-container">
                <div className="title">
                    user redux manage với Hoàng Sơn
                </div>
                <div className="user-redux-body" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-3"><FormattedMessage id="manage-user.add" /></div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input type="email" className="form-control"
                                    value={email}
                                    onChange={(event) => { this.onceChangeInput(event, 'email') }}
                                    disabled={this.state.actions === crud_actions.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input type="password" className="form-control"
                                    value={password}
                                    onChange={(event) => { this.onceChangeInput(event, 'password') }}
                                    disabled={this.state.actions === crud_actions.EDIT ? true : false}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.firstname" /></label>
                                <input type="text" className="form-control"
                                    value={firstname}
                                    onChange={(event) => { this.onceChangeInput(event, 'firstname') }}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.lastname" /></label>
                                <input type="text" className="form-control"
                                    value={lastname}
                                    onChange={(event) => { this.onceChangeInput(event, 'lastname') }}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input type="text" className="form-control"
                                    value={address}
                                    onChange={(event) => { this.onceChangeInput(event, 'address') }}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.phone" /></label>
                                <input type="text" className="form-control"
                                    value={phone}
                                    onChange={(event) => { this.onceChangeInput(event, 'phone') }}
                                />
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select class="form-control" value={gender}
                                    onChange={(event) => { this.onceChangeInput(event, 'gender') }}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap} >
                                                    {language === languages.VI ? item.value_Vi : item.value_En}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-6">
                                <label><FormattedMessage id="manage-user.roleid" /></label>
                                <select id="inputState" class="form-control" value={roleid}
                                    onChange={(event) => { this.onceChangeInput(event, 'roleid') }}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.keyMap} >
                                                    {language === languages.VI ? item.value_Vi : item.value_En}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="col-12 my-3">
                                <button className={this.state.actions === crud_actions.EDIT ? "btn btn-warning" : "btn btn-primary"} onClick={() => this.handleSaveUser()}>

                                    {this.state.actions === crud_actions.EDIT ?
                                        <FormattedMessage id="manage-user.edit" /> :
                                        <FormattedMessage id="manage-user.save" />
                                    }
                                </button>
                            </div>
                            <div className="col-12 mb-5">
                                <TableManageUser
                                    handleEditUserFromParent={this.handleEditUserParent}
                                    actions={this.state.actions}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
        roleRedux: state.admin.roles,
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUserRedux: () => dispatch(actions.fetchAllUserStart()),
        editUserRedux: (data) => dispatch(actions.editUser(data)),
        // processLogout: () => dispatch(actions.processLogout()),
        // changelanguageAppRedux: (languages) => dispatch(actions.changelanguageApp(languages))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

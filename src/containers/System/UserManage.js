import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModaleditUser from './ModaleditUser';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            UserEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.errCode !== 0) {
                alert(response.message)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA');
            }
        } catch (e) {
            console.log(e)
        }
    }
    handleDeleteUser = async (user) => {
        console.log('check delete', user)
        try {
            let res = await deleteUserService(user.id);
            if (res && res.errCode === 0) {
                // this.setState({
                //     arrUsers: this.state.arrUsers.filter(item => item.id !== user.id)
                // })
                await this.getAllUsersFromReact();
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    handleeditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            UserEdit: user
        })
        console.log('check edit user', user)
        // this.props.handleEditUserFromParent(user);
    }
    EditUser = async (user) => {
        try {
            let res = await editUserService(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact();
            } else {
                alert(res.errCode)
            }
        } catch (error) {
            console.log(error)

        }
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggle={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />{
                    this.state.isOpenModalEditUser &&
                    <ModaleditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggle={this.toggleUserEditModal}
                        currentUser={this.state.UserEdit}
                        editUser={this.EditUser}
                    />
                }
                <div className="text-center">Manage users</div>
                <div className='user-table mt-5 mx-3'>
                    <div className="mx-3 mb-3 ">
                        <button className="btn btn-primary px-3" onClick={() => this.handleAddNewUser()}>
                            <i className="fa fa-plus" aria-hidden="true"></i>Add new user
                        </button>
                    </div>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>fist name</th>
                                <th>last name</th>
                                <th>Adderss</th>
                                <th>action</th>
                            </tr>

                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit" onClick={() => this.handleeditUser(item)}>edit</button>
                                            <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

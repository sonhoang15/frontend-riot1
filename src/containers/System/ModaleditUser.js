
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
class ModaleditUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
        }
    }


    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: '123456',
                address: user.address,
            })
        }
    }
    toggle = () => {
        this.props.toggle(); // call function from parent to close modal
    }
    handleOnChageInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }
    checkValidInput = () => {
        let isValid = true;
        let arrInput = ['firstname', 'lastname', 'email', 'password', 'address'];
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check input', arrInput[i], this.state[arrInput[i]])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    handleSaveUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            // call API 
            this.props.editUser(this.state);
        }
    }




    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
            >
                <ModalHeader toggle={() => { this.toggle() }}> Edit user</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>First Name</label>
                            <input
                                type="text"
                                onChange={(Event) => { this.handleOnChageInput(Event, "firstname") }}
                                value={this.state.firstname}
                            />
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input
                                type="text"
                                onChange={(Event) => { this.handleOnChageInput(Event, "lastname") }}
                                value={this.state.lastname}
                            />
                        </div>
                        <div className="input-container">
                            <label>Email</label>
                            <input
                                type="text"
                                onChange={(Event) => { this.handleOnChageInput(Event, "email") }}
                                value={this.state.email}
                                disabled
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(Event) => { this.handleOnChageInput(Event, "password") }}
                                value={this.state.password}
                                disabled
                            />
                        </div>
                        <div className="input-container max-w">
                            <label>Adderss</label>
                            <input
                                type="text"
                                onChange={(Event) => { this.handleOnChageInput(Event, "address") }}
                                value={this.state.address}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        className="px-3"
                        onClick={() => {
                            this.handleSaveUser()
                        }}>Save</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={() => { this.toggle() }}>Cancel</Button>
                </ModalFooter>

            </Modal>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(ModaleditUser);

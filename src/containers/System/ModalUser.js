
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {


    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            address: '',
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            // reset state
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                address: '',
            })
        })
    }

    componentDidMount() {
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
    handleAddNewUser = () => {
        let isValid = this.checkValidInput();
        if (isValid === true) {
            // call API 
            this.props.createNewUser(this.state);
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
                <ModalHeader toggle={() => { this.toggle() }}> Create a new user</ModalHeader>
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
                            />
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input
                                type="password"
                                onChange={(Event) => { this.handleOnChageInput(Event, "password") }}
                                value={this.state.password}
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
                            this.handleAddNewUser()
                        }}>add new</Button>{' '}
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

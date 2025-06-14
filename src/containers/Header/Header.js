import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { languages } from '../../utils';

class Header extends Component {
    handleChangelanguage = (languages) => {
        this.props.changelanguageAppRedux(languages)
    }

    render() {
        const { processLogout, language, userInfo } = this.props;

        return (

            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className="languages">
                    <span className="welcome" >
                        <FormattedMessage id="homeheader.welcome" />
                        {userInfo && userInfo.firstname ? userInfo.firstname : ''}!</span>
                    <span className={language === languages.VI ? "language-vi active" : "language-vi "}
                        onClick={() => this.handleChangelanguage(languages.VI)}>
                        VN</span>
                    <span className={language === languages.EN ? "language-en active" : "language-en "}
                        onClick={() => this.handleChangelanguage(languages.EN)}>
                        EN</span>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>



            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        languages: state.app.languages,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changelanguageAppRedux: (languages) => dispatch(actions.changelanguageApp(languages))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

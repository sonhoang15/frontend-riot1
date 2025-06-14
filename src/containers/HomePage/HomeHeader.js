import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { languages } from '../../utils/constant';
import { changelanguageApp, processLogout } from '../../store/actions'
import Formroll from './Section/Formroll';
import video1 from '../../assets/banner.mp4'
import * as actions from "../../store/actions";
import { withRouter } from 'react-router-dom';

class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false,

        };
    }


    changelanguage = (languages) => {
        this.props.changelanguageAppRedux(languages)
    }
    toggleClick = () => {
        this.setState(prevState => ({
            isFormOpen: !prevState.isFormOpen,
        }))
    };
    handleLoginClick = () => {
        let { userInfo, history } = this.props;
        if (!userInfo || !userInfo.id) {
            history.push('/login');
        }
    };
    handleLogout = () => {
        this.props.processLogout();
        this.props.history.push('/login');
    };
    confirmLogout = () => {
        if (window.confirm("Bạn có muốn logout không?")) {
            this.handleLogout();
        }
    };


    render() {
        // let language = this.props.language;
        const { processLogout, language, userInfo } = this.props;

        return (
            <React.Fragment>
                <div className="home-header-banner">
                    <div className="header">
                        <div className="riotbar-transparent">
                            <div className="home-header-container header">
                                <div className="home-header-content">
                                    <div className="left-content">
                                        <a className="logo-desginer" onClick={this.toggleClick}>
                                            <div className="logo-1">
                                                <svg
                                                    width="85"
                                                    height="27"
                                                    className="_4QbmucHkCfNI1ob1rB2Twg== logo-riot"
                                                    viewBox="0 0 587.93 165">
                                                    <title>mainLogoRiotFist21</title>
                                                    <path
                                                        d="M98.77.33 0 46.07l24.61 
                                                93.66 18.73-2.3-5.15-58.89 
                                                6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 
                                                66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05 1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 0 1-1.92 7.31 13 13 0 0 1-5.6 5.11 20 20 0 0 1-8.9 1.8 17.53 17.53 0 0 1-10-2.8 17.87 17.87 0 0 1-6.44-8.14 33.06 33.06 0 0 1-2.27-12.93 31.81 31.81 0 0 1 2.32-12.81 18.14 18.14 0 0 1 6.5-8 17.27 17.27 0 0 1 9.82-2.78 19.31 19.31 0 0 1 5.36.71 14.15 14.15 0 0 1 4.33 2.09 12.92 12.92 0 0 1 3.18 3.29 15.61 15.61 0 0 1 2 4.44h17.27a27.22 
                                                27.22 0 0 0-3.46-10.28 28.84 28.84 0 0 0-7.05-8.1 32.6 32.6 0 0 0-9.91-5.29 37.91 37.91 0 0 0-12.06-1.86 37.32 37.32 0 0 0-14 2.6 32.6 32.6 0 0 0-11.36 7.61 35 35 0 0 0-7.61 12.21 46.15 46.15 0 0 0-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0 0 12.69 13.27 39.84 39.84 0 0 0 35.84.84 28.39 28.39 0 0 0 11.67-11q4.25-7.19 4.24-17.2v-9.76Zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 0 0-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 0 0-6.26 1 8.62 8.62 0 0 0-3.83 2.78 6.74 6.74 0 0 0-1.33 4 6.2 6.2 0 0 0 .79 3.29 7.27 7.27 0 0 0 2.4 2.45 16.54 16.54 0 0 0 3.7 1.79 40.14 40.14 0 0 0 4.64 1.31l6.63 1.54a47.19 47.19 0 0 1 9.45 3.08 27.46 27.46 0 0 1 7.2 4.68 18.84 18.84 0 
                                                0 1 4.58 6.39 20.37 20.37 0 0 1 1.61 8.29 20.65 20.65 0 0 1-3.54 12.11 22.56 22.56 0 0 1-10.15 7.85 41.31 41.31 0 0 1-15.93 2.76 42.69 42.69 0 0 1-16.17-2.81 23.22 23.22 0 0 1-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 0 0 7.05 9.94 19.37 19.37 0 0 0 7.24 1.26 18.44 18.44 0 0 0 6.66-1.09 10 10 0 0 0 4.33-3 7.22 7.22 0 0 0 1.57-4.48 6.16 6.16 0 0 0-1.42-4 10.86 10.86 0 0 0-4.14-2.81 42.07 42.07 0 0 0-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 0 1 3.72-12.12 24.74 24.74 0 0 1 10.33-8.11 36.74 36.74 0 0 1 15-2.91 35.62 35.62 0 0 1 14.92 2.91 23.43 23.43 0 0 1 9.91 8.14 21.54 21.54 0 0 1 3.6 12.12Zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42Zm-28.43-29.7 8.22-27.65h3.1l8.26 27.65Zm278.58-37.76a4 4 0 0 1-3.67-2.44 4 4 0 0 1 0-3.1 4 4 0 0 1 .85-1.27 4.25 4.25 0 0 1 1.27-.86 4.15 4.15 0 0 1 3.1 0 4.13 4.13 0 0 
                                                1 1.27.86 4.08 4.08 0 0 1 .86 1.27 4 4 0 0 1 0 3.1 4.08 4.08 0 0 1-.86 1.27 4 4 0 0 1-1.27.86 4 4 0 0 1-1.55.31Zm0-1.09a2.84 2.84 0 0 0 1.47-.39 2.94 2.94 0 0 0 1.05-1 2.93 2.93 0 0 0 0-2.92 3 3 0 0 0-1.06-1 2.93 2.93 0 0 0-2.92 0 3 3 0 0 0-1 1 2.86 2.86 0 0 0 0 2.92 3 3 0 0 0 1 1 2.83 2.83 0 0 0 1.46.39Zm-1.46-1.15V90.6h1.78a1.52 1.52 0 0 1 .69.15 1.13 1.13 0 0 1 .47.42 1.24 1.24 0 0 1 .17.66 1.16 1.16 0 0 1-.18.66 1 1 0 0 1-.48.41 1.56 1.56 0 0 1-.7.14h-1.2v-.72h1a.52.52 0 0 0 .36-.12.5.5 0 0 0 .14-.37.47.47 0 0 0-.14-.37.52.52 0 0 0-.36-.12h-.55v2.93Zm2.39-1.68.82 1.68h-1.11l-.75-1.68ZM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 0 1-12.79 13.17 38.57 38.57 0 0 1-36.31 0 32.75 32.75 0 0 1-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0 1 12.75-13.14 38.65 38.65 0 0 1 36.31 0 32.67 32.67 0 0 1 12.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 0 0-2.23-13 17.47 17.47 0 0 0-6.33-8 18.57 18.57 0 0 0-19.45 0 17.57 17.57 0 0 0-6.35 8 38.59 38.59 0 0 0 0 26 17.49 17.49 0 0 0 6.35 8 18.57 18.57 0 0 0 19.45 0 17.39 17.39 0 0 0 6.33-8 33.4 33.4 0 0 0 2.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 0 0 8.75-16.39 24.15 24.15 0 0 0-3.26-12.75 21.9 21.9 0 0 0-9.36-8.64 32.56 32.56 0 0 0-14.64-3H212v75.4h17.06v-26.3Zm-.32-15.61a19.35 19.35 0 0 1-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 0 1 7.25 1.24 9.12 9.12 0 0 1 4.4 3.7 10 10 0 0 1 1.5 5.64 9.65 9.65 0 0 1-1.48 5.55 8.86 8.86 0 0 1-4.38 3.55M382.04 1.03v14h29.3l.8 
                                                2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14Z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="riotbar-app-switcher-trigger-arrow">
                                                <svg viewBox="0 0 8 5">
                                                    <title>mainMenuDownNonHover</title>
                                                    <path
                                                        d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="center-content">
                                        <div className="content-background" href="/home">

                                            <div className="logo-2">
                                                <a href="/home">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        id="Layer_1"
                                                        data-name="Layer 1"
                                                        viewBox="0 0 32 32">
                                                        <circle cx="16" cy="16" r="16" fill="#f1f5f1" class="circle-icon-riot" />
                                                        <polygon
                                                            points="16.42 8 6.75 12.47 9.16 21.64 11 21.41 10.49 15.65 11.1 15.38 12.13 21.27 15.27 20.89 14.71 14.53 15.3 14.27 16.45 20.75 19.62 20.36 19.01 13.38 19.61 13.12 20.86 20.2 24 19.82 24 9.89 16.42 8"
                                                            fill="#050505">
                                                        </polygon>
                                                        <polygon points="16.65 21.9 16.81 22.8 24 24 24 21 16.66 21.9 16.65 21.9"
                                                            fill="#050505">

                                                        </polygon>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div className="btn-document">
                                                <div className="desktop-link-item">
                                                    <a className="document" href="../InforHeader">
                                                        <p className="p-document"> <FormattedMessage id="homeheader.who-are-we" /></p>
                                                    </a>
                                                </div>
                                                <div className="desktop-link-item">
                                                    <a className="document">
                                                        <p className="p-document"><FormattedMessage id="homeheader.Work-with-us" /></p>
                                                    </a>
                                                </div>
                                                <div className="desktop-link-item">
                                                    <a className="document">
                                                        <p className="p-document"><FormattedMessage id="homeheader.News" /></p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" right-content">
                                        <div className="earth-search-sign">
                                            <div className="button-toggleLocaleMenu">
                                                <span className="icon-lang">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                        class="bi bi-globe" viewBox="0 0 16 16">
                                                        <title> globeIcon </title>
                                                        <path
                                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                                                    </svg>
                                                </span>
                                                <div className="dropdown-content">
                                                    <div className={language === languages.VI ? 'language-vi action' : 'language-vi'}><span onClick={() => this.changelanguage(languages.VI)}>Tiếng Việt</span></div>
                                                    <div className={language === languages.EN ? 'language-en action' : 'language-en'}><span onClick={() => this.changelanguage(languages.EN)}>Tiếng Anh</span></div>
                                                </div>
                                            </div>
                                            <form action="/search" method="get">
                                                <div className="search">
                                                    <input className="search-input" type="search" placeholder="search" />
                                                    <span className="search-icon material-symbols-outlined">
                                                        <svg
                                                            viewBox="0 0 19 20">
                                                            <path className="search-icon"
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M19 18.6l-5.2-5.2C15.2 12 16 10.1 16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8c1.6 0 3.1-.5 4.3-1.3l5.3 5.3 1.4-1.4zM2 8c0-3.3 2.7-6 6-6 1.6 0 3.1.6 4.2 1.8C13.4 4.9 14 6.4 14 8s-.6 3.1-1.8 4.2C11.1 13.4 9.6 14 8 14c-3.3 0-6-2.7-6-6z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </form>
                                            <div className="sign" >
                                                {userInfo && userInfo.roleid ? (
                                                    // Đã đăng nhập
                                                    <span className="sign-in" style={{ cursor: "pointer" }}
                                                        onClick={this.confirmLogout}>
                                                        <FormattedMessage id="homeheader.welcome" />
                                                        {userInfo.firstname}!
                                                    </span>
                                                ) : (
                                                    // Chưa đăng nhập
                                                    <a href="/login" className="sign-in" onClick={this.handleLoginClick}>
                                                        <FormattedMessage id="homeheader.sign-in" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.props.isShowBanner === true &&
                            <div className="banner">
                                <div className="home-header-intro">
                                    <div className="banner-conent">
                                        <video
                                            className="hero-new-video"
                                            autoPlay
                                            playsInline
                                            muted
                                            loop
                                            poster="https://www.riotgames.com/darkroom/1920/0dce4baaabd175f7ed1e08426653769d:14f2af5f5c8bf0cd1bc87af1c7730ed3/homepage-hero-general-brand.png">
                                            <source src={video1} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <Formroll
                    isOpen={this.state.isFormOpen} onClose={this.toggleClick}
                />
            </React.Fragment >
        );
    }

}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isLogout: state.user.isLogout,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changelanguageAppRedux: (languages) => dispatch(changelanguageApp(languages)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Newfeed.scss';
import { FormattedMessage } from 'react-intl';
import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.jpg"
import img4 from "../../../assets/img4.jpg"
import img5 from "../../../assets/img5.png"
import * as actions from '../../../store/actions'
import { withRouter } from 'react-router-dom';
import { getAllLocationService } from '../../../services/userService'
import InforPages from '../Pages/InforPages';
class Newfeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blockInfor: [],
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.locationRedux !== this.props.locationRedux) {
            this.setState({
                blockInfor: this.props.locationRedux
            })
        }

    }

    componentDidMount() {
        // this.props.loadinforpages();
        this.props.loadinglocation();
    }

    handleViewInforPage = async (location_id) => {
        // console.log("check props", location_id);
        // this.props.history.push(`/location-page/${location_id}`);
        // console.log("check props", this.props.history.push(`/location-page/${location_id}`));
        const path = `/InforPages/${location_id}`;
        this.props.history.push(path);

        try {
            const response = await getAllLocationService(location_id);
            console.log(response.data);
            if (response && response.data.errCode === 0) {
                this.setState({ selectedPage: response.data.data });
            }
        } catch (error) {
            console.error("Error loading page info", error);
        }
    }
    render() {
        // console.log("check :", this.props.InforPagesRedux)
        console.log("check location:", this.props.locationRedux)
        let blockInfor = this.state.blockInfor;
        return (
            <div>
                <div className="section-Newfeed">
                    <div className="section-content">
                        <div className="section-block">
                            <div className="section-top">
                                <h2><FormattedMessage id="new-feed.titlle" /></h2>
                                <a className="btn-see-more" href="#">
                                    <span>See more</span>
                                </a>
                            </div>
                            <div className="section-center">
                                <div className="background-filter">
                                    <div className="whats-happening__hero-wrapper" onClick={() => this.handleViewInforPage('L1')}>
                                        <div className="whats-happening__hero" >
                                            <div className="responsive-media">
                                                <img src={img1} />
                                            </div>
                                        </div>
                                        <div className="whats-happening__hero-content">
                                            <h3><FormattedMessage id="new-feed.location1" /></h3>
                                            <div className="whats-happening__category-wrapper">
                                                <div className="logo-LOL">
                                                    <span class="icon"
                                                        aria-hidden="true"
                                                        style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <svg viewBox="0 0 20 20" fill="none"><path d="M10.901 2.674c3.55.457 6.299 3.57 6.299 7.341a7.52 7.52 0 0 1-.994 3.749h-1.903a5.88 5.88 0 0 0 .897-1.493 5.908 5.908 0 0 0 .442-2.256c0-.785-.149-1.543-.442-2.255a5.817 5.817 0 0 0-1.209-1.844 5.588 5.588 0 0 0-3.09-1.623V2.674zM5.408 15.711v-2.328a5.953 5.953 0 0 1-.609-1.112 5.91 5.91 0 0 1-.441-2.256c0-.785.148-1.543.441-2.255.163-.396.367-.77.609-1.112V4.316a7.456 7.456 0 0 0-2.608 5.7 7.448 7.448 0 0 0 2.608 5.694zM9.825 2H5.697l.79 1.657v12.705L5.708 18h9.355l.853-3.131h-6.09V2z"
                                                            fill="#C28F2C">
                                                        </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div className="whats-happening__category">News</div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="whats-happening__articles" >
                                        <li tabindex="0" class="whats-happening__article" onClick={() => this.handleViewInforPage('L2')}>
                                            <a tabindex="-1" class="whats-happening__article-card" >
                                                <div class="whats-happening__article-title-wrapper">
                                                    <h3 class="whats-happening__article-title"><FormattedMessage id="new-feed.location2" /></h3>
                                                    <div class="whats-happening__category-wrapper">
                                                        <div class="game-badge game-badge--riot-fist-badge">
                                                            <span class="icon" aria-hidden="true" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                                <svg dataname="Layer 1" viewBox="0 0 185.47 163.51">
                                                                    <path class="cls-1" fill="#f1f5f1"
                                                                        d="M98.77 0L0 45.74l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74 10.62 60.2 32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.38L98.77 0zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.21-.04.01z">
                                                                    </path>
                                                                    <path class="cls-1"
                                                                        d="M176.17.71V0h3.64v.71zm1.41 3.94V.41h.81v4.24zm3 0V0h.8v4.65zm2.21 0L180.73 0h.83L183 3.42 184.44 0h.84l-2.06 4.65zm1.83 0V0h.81v4.65z">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="whats-happening__category">News</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={img2} class="whats-happening__article-image" />
                                                </div>
                                            </a>
                                        </li>
                                        <li tabindex="0" class="whats-happening__article" onClick={() => this.handleViewInforPage('L3')}>
                                            <a tabindex="-1" class="whats-happening__article-card" >
                                                <div class="whats-happening__article-title-wrapper">
                                                    <h3 class="whats-happening__article-title"><FormattedMessage id="new-feed.location3" /></h3>
                                                    <div class="whats-happening__category-wrapper"><div class="game-badge game-badge--valorant">
                                                        <span class="icon" aria-hidden="true" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                            <svg viewBox="0 0 20 20" fill="none">
                                                                <path d="M18 3.7v6.059c0 .096-.034.19-.096.265l-1.55 1.888a.44.44 0 0 1-.342.16h-4.91c-.086 0-.133-.097-.08-.162l6.797-8.273c.06-.073.181-.032.181.062zM7.202 16.24l-5.106-6.216A.417.417 0 0 1 2 9.76V3.7c0-.094.122-.135.181-.062l10.352 12.601c.053.065.006.162-.08.162h-4.91a.44.44 0 0 1-.341-.16z" fill="#FF4654">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                        <div class="whats-happening__category">News</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={img3} class="whats-happening__article-image" />
                                                </div>
                                            </a>
                                        </li>
                                        <li tabindex="0" class="whats-happening__article" onClick={() => this.handleViewInforPage('L4')}>
                                            <a tabindex="-1" class="whats-happening__article-card" >
                                                <div class="whats-happening__article-title-wrapper">
                                                    <h3 class="whats-happening__article-title"><FormattedMessage id="new-feed.location4" /></h3>
                                                    <div class="whats-happening__category-wrapper">
                                                        <div class="game-badge game-badge--valorant"><span class="icon" aria-hidden="true" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                            <svg viewBox="0 0 20 20" fill="none">
                                                                <path d="M18 3.7v6.059c0 .096-.034.19-.096.265l-1.55 1.888a.44.44 0 0 1-.342.16h-4.91c-.086 0-.133-.097-.08-.162l6.797-8.273c.06-.073.181-.032.181.062zM7.202 16.24l-5.106-6.216A.417.417 0 0 1 2 9.76V3.7c0-.094.122-.135.181-.062l10.352 12.601c.053.065.006.162-.08.162h-4.91a.44.44 0 0 1-.341-.16z" fill="#FF4654">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        </div>
                                                        <div class="whats-happening__category">News</div>
                                                    </div>
                                                </div>
                                                <div >
                                                    <img src={img4} class="whats-happening__article-image" />
                                                </div>
                                            </a>
                                        </li>
                                        <li tabindex="0" class="whats-happening__article" onClick={() => this.handleViewInforPage('L5')}>
                                            <a tabindex="-1" class="whats-happening__article-card">
                                                <div class="whats-happening__article-title-wrapper">
                                                    <h3 class="whats-happening__article-title"><FormattedMessage id="new-feed.location5" /></h3>
                                                    <div class="whats-happening__category-wrapper">
                                                        <div class="game-badge game-badge--riot-fist-badge">
                                                            <span class="icon" aria-hidden="true" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                                <svg dataname="Layer 1" viewBox="0 0 185.47 163.51">
                                                                    <path class="cls-1" fill="#f1f5f1"
                                                                        d="M98.77 0L0 45.74l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74 10.62 60.2 32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.38L98.77 0zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.21-.04.01z">
                                                                    </path>
                                                                    <path class="cls-1" d="M176.17.71V0h3.64v.71zm1.41 3.94V.41h.81v4.24zm3 0V0h.8v4.65zm2.21 0L180.73 0h.83L183 3.42 184.44 0h.84l-2.06 4.65zm1.83 0V0h.81v4.65z">
                                                                    </path>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="whats-happening__category">News</div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={img5} class="whats-happening__article-image" />
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        // InforPagesRedux: state.admin.inforPages,
        locationRedux: state.admin.locationPage

    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadinforpages: () => dispatch(actions.fetchLoadingpage()),
        loadinglocation: () => dispatch(actions.getAllLocation())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Newfeed));

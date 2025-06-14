import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Game.scss';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { getAllLocationService } from '../../../services/userService'
import img1 from "../../../assets/images/lol-2024.png";
import img5 from "../../../assets/images/lor-set-9-product-card.png";
import img3 from "../../../assets/images/tft-st14-productcard.png";
import img2 from "../../../assets/images/val-productcard.png";
import img4 from "../../../assets/images/wr.png";
import logo1 from "../../../assets/logo/lol-logotype.png";
import logo2 from "../../../assets/logo/valorant-logotype.png";
import logo3 from "../../../assets/logo/tft-logotype-2021.png";
import logo4 from "../../../assets/logo/lol-wildrift-logotype.png";
import logo5 from "../../../assets/logo/legends-of-runeterra-logotype.png";
class Game extends Component {
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
        console.log("check location:", this.props.locationRedux)
        let blockInfor = this.state.blockInfor;
        return (
            <div className="section-Game">
                <div className="Game-block">
                    <div className="container-Game-block">
                        <div class="our-games__title"><h2><FormattedMessage id="ALL.Game" /></h2>
                        </div>
                        <div class="our-games__wrapper">
                            <ul class="our-games__list ">
                                <li class="our-games__item">
                                    <div class="game-card" onClick={() => this.handleViewInforPage('S1')}>
                                        <a class="game-card_link" target="_blank">
                                            <img src={img1} />
                                        </a>
                                        <div class="game-card__content">
                                            <div class="game-card__logo">
                                                <img src={logo1} />
                                            </div>
                                            <div class="game-card-description">
                                                <p>
                                                </p>
                                                <div class="game-card-platforms">
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">windows</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M3.444 4.415l4.087-.555.002 3.93-4.084.022-.005-3.397zM7.53 8.243l.003 3.932-4.084-.559v-3.4l4.08.027zm.496-4.455L13.442 3v4.74l-5.417.043V3.788zm5.42 4.491L13.441 13l-5.417-.762-.008-3.966 5.427.008z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">apple</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M12.437 10.793a5.53 5.53 0 0 1-.519.966c-.273.403-.496.682-.668.837-.267.255-.553.385-.858.392-.22 0-.485-.065-.794-.196a2.207 2.207 0 0 0-.853-.196 2.28 2.28 0 0 0-.878.196c-.314.131-.566.2-.759.207-.294.013-.586-.121-.878-.403-.187-.168-.42-.457-.7-.866a6.083 6.083 0 0 1-.738-1.522 5.773 5.773 0 0 1-.31-1.813c0-.67.14-1.248.42-1.733.22-.389.513-.696.879-.92.366-.225.761-.34 1.188-.348.233 0 .538.074.918.221.379.148.622.223.73.223.079 0 .35-.088.807-.262.433-.162.799-.229 1.098-.203.811.068 1.421.4 1.826.997-.725.456-1.084 1.095-1.077 1.914.006.638.23 1.169.668 1.59.2.196.421.347.668.454-.054.162-.11.317-.17.465zM10.575 3.2c0 .5-.176.967-.527 1.4-.424.513-.937.81-1.493.763a1.595 1.595 0 0 1-.011-.19c0-.48.202-.993.56-1.414.178-.213.406-.39.681-.53s.536-.217.78-.23c.008.068.01.135.01.201z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="our-games__item">
                                    <div class="game-card" onClick={() => this.handleViewInforPage('S2')}>
                                        <a class="game-card_link" target="_blank">
                                            <img src={img2} />
                                        </a>
                                        <div class="game-card__content">
                                            <div class="game-card__logo">
                                                <img src={logo2} />
                                            </div>
                                            <div class="game-card-description">
                                                <p>
                                                </p>
                                                <div class="game-card-platforms">
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">windows</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M3.444 4.415l4.087-.555.002 3.93-4.084.022-.005-3.397zM7.53 8.243l.003 3.932-4.084-.559v-3.4l4.08.027zm.496-4.455L13.442 3v4.74l-5.417.043V3.788zm5.42 4.491L13.441 13l-5.417-.762-.008-3.966 5.427.008z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">playstation</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M14.15 11.2s.632-.227.89-.546c.258-.32.144-.783-.872-1.098-.9-.335-2.049-.45-2.986-.349-.937.102-1.604.333-1.604.333l-.133.044v1.269l2.307-.797c.393-.139.97-.168 1.29-.065.319.102.258.297-.135.435l-3.462 1.21v1.222L14.15 11.2z" fill="#FCFCFC">
                                                            </path>
                                                            <path d="M9.893 5.448v3.125c1.342.635 2.397 0 2.397-1.678 0-1.72-.617-2.484-2.44-3.098C9.133 3.56 7.8 3.167 6.885 3v9.33l2.152.67V5.175c0-.367.167-.612.436-.527.35.095.42.433.42.8zm-7.699 4.827c-.475.345-.301.945.741 1.233a7.115 7.115 0 0 0 3.319.262l.212-.035v-1.098l-1.065.38c-.393.138-.97.167-1.29.065-.318-.103-.258-.298.135-.436l2.22-.78V8.64L3.38 9.716s-.746.24-1.186.559z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">xbox</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M8.345 13.975a5.99 5.99 0 0 1-2.664-.944c-.674-.44-.826-.62-.826-.98 0-.724.796-1.992 2.159-3.438.774-.82 1.852-1.783 1.968-1.757.227.051 2.039 1.817 2.717 2.649 1.072 1.315 1.566 2.391 1.315 2.871-.19.365-1.372 1.078-2.24 1.352a6.587 6.587 0 0 1-2.429.247zm-4.4-2.677c-.56-.858-.842-1.703-.979-2.926-.045-.403-.029-.634.102-1.462.164-1.033.752-2.227 1.46-2.962.3-.313.327-.32.694-.197.446.15.922.478 1.66 1.145l.43.39-.235.288C5.986 6.914 4.833 8.814 4.4 9.99c-.236.639-.331 1.28-.23 1.547.069.18.006.113-.224-.24zm9.826.146c.056-.27-.014-.765-.178-1.265-.355-1.083-1.542-3.096-2.631-4.465l-.344-.431.372-.34c.484-.446.82-.712 1.184-.938.286-.178.696-.336.871-.336.109 0 .49.396.8.828a6.28 6.28 0 0 1 1.006 2.326c.115.546.124 1.715.018 2.26a7.114 7.114 0 0 1-.45 1.42c-.134.294-.468.866-.614 1.052-.076.096-.076.095-.034-.111zm-5.327-7.98c-.503-.255-1.278-.529-1.707-.603a3.13 3.13 0 0 0-.57-.032c-.353.018-.337 0 .23-.268a5.834 5.834 0 0 1 1.399-.466c.6-.126 1.73-.127 2.32-.003.639.135 1.39.414 1.814.675l.126.077-.29-.014c-.573-.03-1.41.203-2.308.64-.27.131-.506.236-.523.233a9.183 9.183 0 0 1-.491-.239z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="our-games__item">
                                    <div class="game-card" onClick={() => this.handleViewInforPage('S3')}>
                                        <a class="game-card_link" target="_blank">
                                            <img src={img3} />
                                        </a>
                                        <div class="game-card__content">
                                            <div class="game-card__logo">
                                                <img src={logo3} />
                                            </div>
                                            <div class="game-card-description">
                                                <p>
                                                </p>
                                                <div class="game-card-platforms">
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">windows</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M3.444 4.415l4.087-.555.002 3.93-4.084.022-.005-3.397zM7.53 8.243l.003 3.932-4.084-.559v-3.4l4.08.027zm.496-4.455L13.442 3v4.74l-5.417.043V3.788zm5.42 4.491L13.441 13l-5.417-.762-.008-3.966 5.427.008z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">apple</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M12.437 10.793a5.53 5.53 0 0 1-.519.966c-.273.403-.496.682-.668.837-.267.255-.553.385-.858.392-.22 0-.485-.065-.794-.196a2.207 2.207 0 0 0-.853-.196 2.28 2.28 0 0 0-.878.196c-.314.131-.566.2-.759.207-.294.013-.586-.121-.878-.403-.187-.168-.42-.457-.7-.866a6.083 6.083 0 0 1-.738-1.522 5.773 5.773 0 0 1-.31-1.813c0-.67.14-1.248.42-1.733.22-.389.513-.696.879-.92.366-.225.761-.34 1.188-.348.233 0 .538.074.918.221.379.148.622.223.73.223.079 0 .35-.088.807-.262.433-.162.799-.229 1.098-.203.811.068 1.421.4 1.826.997-.725.456-1.084 1.095-1.077 1.914.006.638.23 1.169.668 1.59.2.196.421.347.668.454-.054.162-.11.317-.17.465zM10.575 3.2c0 .5-.176.967-.527 1.4-.424.513-.937.81-1.493.763a1.595 1.595 0 0 1-.011-.19c0-.48.202-.993.56-1.414.178-.213.406-.39.681-.53s.536-.217.78-.23c.008.068.01.135.01.201z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">mobile</span>
                                                        <svg viewBox="0 0 17 16" fill="none"><path d="M8.02 11.126a.624.624 0 1 0 1.248 0 .624.624 0 0 0-1.248 0zm-2.5-7.188v8.125c0 .518.42.938.937.938h4.375c.518 0 .938-.42.938-.938V3.938A.938.938 0 0 0 10.832 3H6.457a.938.938 0 0 0-.937.938zm.937 8.008v-7.89c0-.065.053-.118.117-.118h4.14c.065 0 .118.053.118.117v7.89a.117.117 0 0 1-.117.118h-4.14a.118.118 0 0 1-.118-.117z" fill="#FCFCFC">
                                                        </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="our-games__item">
                                    <div class="game-card" onClick={() => this.handleViewInforPage('S4')}>
                                        <a class="game-card_link" target="_blank">
                                            <img src={img4} />
                                        </a>
                                        <div class="game-card__content">
                                            <div class="game-card__logo">
                                                <img src={logo4} />
                                            </div>
                                            <div class="game-card-description">
                                                <p>
                                                </p>
                                                <div class="game-card-platforms">
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">mobile</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M8.02 11.126a.624.624 0 1 0 1.248 0 .624.624 0 0 0-1.248 0zm-2.5-7.188v8.125c0 .518.42.938.937.938h4.375c.518 0 .938-.42.938-.938V3.938A.938.938 0 0 0 10.832 3H6.457a.938.938 0 0 0-.937.938zm.937 8.008v-7.89c0-.065.053-.118.117-.118h4.14c.065 0 .118.053.118.117v7.89a.117.117 0 0 1-.117.118h-4.14a.118.118 0 0 1-.118-.117z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="our-games__item">
                                    <div class="game-card" onClick={() => this.handleViewInforPage('S5')}>
                                        <a class="game-card_link" target="_blank">
                                            <img src={img5} />
                                        </a>
                                        <div class="game-card__content">
                                            <div class="game-card__logo">
                                                <img src={logo5} />
                                            </div>
                                            <div class="game-card-description">
                                                <p>
                                                </p>
                                                <div class="game-card-platforms">
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">windows</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M3.444 4.415l4.087-.555.002 3.93-4.084.022-.005-3.397zM7.53 8.243l.003 3.932-4.084-.559v-3.4l4.08.027zm.496-4.455L13.442 3v4.74l-5.417.043V3.788zm5.42 4.491L13.441 13l-5.417-.762-.008-3.966 5.427.008z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                        <span class="is-vhidden">mobile</span>
                                                        <svg viewBox="0 0 17 16" fill="none">
                                                            <path d="M8.02 11.126a.624.624 0 1 0 1.248 0 .624.624 0 0 0-1.248 0zm-2.5-7.188v8.125c0 .518.42.938.937.938h4.375c.518 0 .938-.42.938-.938V3.938A.938.938 0 0 0 10.832 3H6.457a.938.938 0 0 0-.937.938zm.937 8.008v-7.89c0-.065.053-.118.117-.118h4.14c.065 0 .118.053.118.117v7.89a.117.117 0 0 1-.117.118h-4.14a.118.118 0 0 1-.118-.117z" fill="#FCFCFC">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        locationRedux: state.admin.locationPage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadinforpages: () => dispatch(actions.fetchLoadingpage()),
        loadinglocation: () => dispatch(actions.getAllLocation())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Game));

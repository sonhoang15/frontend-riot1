import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Formroll.scss';
import img1 from '../../../assets/img form roll/imgcroll1.jpg';
import logo1 from '../../../assets/logo/lol-esports-logo-full.png';
import img2 from '../../../assets/img form roll/2.jpg';
import img3 from '../../../assets/img form roll/3.jpg';
import img4 from '../../../assets/img form roll/4.jpg';
import img5 from '../../../assets/img form roll/5.jpg';
import logo2 from '../../../assets/logo/valorant-logotype.png';
import logo3 from '../../../assets/logo/tft-logotype-2021.png';
import logo4 from '../../../assets/logo/legends-of-runeterra-logotype.png';
import logo5 from '../../../assets/logo/lol-wildrift-logotype.png';
import img6 from '../../../assets/img form roll/8.jpg'
import img7 from '../../../assets/img form roll/9.jpg'
import { Modal } from 'reactstrap';
class Formroll extends Component {
    render() {
        return (
            <div id="riotbar-application-switcher" data-testid="riotbar:appswitcher2" class={`formroll ${this.props.isOpen ? 'show' : 'hide'}`}>
                <div class="riotbar-application-switcher-fake-bg">
                </div>
                <div data-testid="riotbar:appswitcher2:popout" class="switcher-content riotbar-application-switcher-content">
                    <div data-testid="riotbar:appswitcher2:header" class="switcher-tabs-wrapper riotbar-application-switcher-tabs-wrapper">
                        <div data-testid="riotbar:appswitcher2:logo" class="application-logo-wrapper riotbar-application-logo-wrapper">
                            <span class="application-logo riotbar-application-logo" onClick={this.props.onClose} >
                                <svg class="switcher-riot-logo app-switcher-riot-logo" viewBox="0 0 587.93 165">
                                    <title>mainLogoRiotFist21</title>
                                    <path d="M98.77.33 0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05 1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 0 1-1.92 7.31 13 13 0 0 1-5.6 5.11 20 20 0 0 1-8.9 1.8 17.53 17.53 0 0 1-10-2.8 17.87 17.87 0 0 1-6.44-8.14 33.06 33.06 0 0 1-2.27-12.93 31.81 31.81 0 0 1 2.32-12.81 18.14 18.14 0 0 1 6.5-8 17.27 17.27 0 0 1 9.82-2.78 19.31 19.31 0 0 1 5.36.71 14.15 14.15 0 0 1 4.33 2.09 12.92 12.92 0 0 1 3.18 3.29 15.61 15.61 0 0 1 2 4.44h17.27a27.22 27.22 0 0 0-3.46-10.28 28.84 28.84 0 0 0-7.05-8.1 32.6 32.6 0 0 0-9.91-5.29 37.91 37.91 0 0 0-12.06-1.86 37.32 37.32 0 0 0-14 2.6 32.6 32.6 0 0 0-11.36 7.61 35 35 0 0 0-7.61 12.21 46.15 46.15 0 0 0-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0 0 12.69 13.27 39.84 39.84 0 0 0 35.84.84 28.39 28.39 0 0 0 11.67-11q4.25-7.19 4.24-17.2v-9.76Zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 0 0-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 0 0-6.26 1 8.62 8.62 0 0 0-3.83 2.78 
                                    6.74 6.74 0 0 0-1.33 4 6.2 6.2 0 0 0 .79 3.29 7.27 7.27 0 0 0 2.4 2.45 16.54 16.54 0 0 0 3.7 1.79 40.14 40.14 0 0 0 4.64 1.31l6.63 1.54a47.19 47.19 0 0 1 9.45 3.08 27.46 27.46 0 0 1 7.2 4.68 18.84 18.84 0 0 1 4.58 6.39 20.37 20.37 0 0 1 1.61 8.29 20.65 20.65 0 0 1-3.54 12.11 22.56 22.56 0 0 1-10.15 7.85 41.31 41.31 0 0 1-15.93 2.76 42.69 42.69 0 0 1-16.17-2.81 23.22 23.22 0 0 1-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 0 0 7.05 9.94 19.37 19.37 0 0 0 7.24 1.26 18.44 18.44 0 0 0 6.66-1.09 10 10 0 0 0 4.33-3 7.22 7.22 0 0 0 1.57-4.48 6.16 6.16 0 0 0-1.42-4 10.86 10.86 0 0 0-4.14-2.81 42.07 42.07 0 0 0-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 0 1 3.72-12.12 24.74 24.74 0 0 1 10.33-8.11 36.74 36.74 0 0 1 15-2.91 35.62 35.62 0 0 1 14.92 2.91 23.43 23.43 0 0 1 9.91 8.14 21.54 21.54 0 0 1 3.6 12.12Zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42Zm-28.43-29.7 8.22-27.65h3.1l8.26 27.65Zm278.58-37.76a4 4 0 0 1-3.67-2.44 4 4 0 0 1 0-3.1 4 4 0 0 1 .85-1.27 4.25 4.25 0 0 1 1.27-.86 4.15 4.15 0 0 1 3.1 0 4.13 4.13 0 0 1 1.27.86 4.08 4.08 0 0 1 .86 1.27 4 4 0 0 1 0 3.1 4.08 4.08 0 0 1-.86 1.27 4 4 0 0 1-1.27.86 4 4 0 0 1-1.55.31Zm0-1.09a2.84
                                     2.84 0 0 0 1.47-.39 2.94 2.94 0 0 0 1.05-1 2.93 2.93 0 0 0 0-2.92 3 3 0 0 0-1.06-1 2.93 2.93 0 0 0-2.92 0 3 3 0 0 0-1 1 2.86 2.86 0 0 0 0 2.92 3 3 0 0 0 1 1 2.83 2.83 0 0 0 1.46.39Zm-1.46-1.15V90.6h1.78a1.52 1.52 0 0 1 .69.15 1.13 1.13 0 0 1 .47.42 1.24 1.24 0 0 1 .17.66 1.16 1.16 0 0 1-.18.66 1 1 0 0 1-.48.41 1.56 1.56 0 0 1-.7.14h-1.2v-.72h1a.52.52 0 0 0 .36-.12.5.5 0 0 0 .14-.37.47.47 0 0 0-.14-.37.52.52 0 0 0-.36-.12h-.55v2.93Zm2.39-1.68.82 1.68h-1.11l-.75-1.68ZM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 0 1-12.79 13.17 38.57 38.57 0 0 1-36.31 0 32.75 32.75 0 0 1-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0 1 12.75-13.14 38.65 38.65 0 0 1 36.31 0 32.67 32.67 0 0 1 12.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 0 0-2.23-13 17.47 17.47 0 0 0-6.33-8 18.57 18.57 0 0 0-19.45 0 17.57 17.57 0 0 0-6.35 8 38.59 38.59 0 0 0 0 26 17.49 17.49 0 0 0 6.35 8 18.57 18.57 0 0 0 19.45 0 17.39 17.39 0 0 0 6.33-8 33.4 33.4 0 0 0 2.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 0 0 8.75-16.39 24.15 24.15 0 0 0-3.26-12.75 21.9 21.9 0 0 0-9.36-8.64 32.56 32.56 0 0 0-14.64-3H212v75.4h17.06v-26.3Zm-.32-15.61a19.35 19.35 0 0 1-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 0 1 7.25 1.24 9.12 9.12 0 0 1 4.4 3.7 10 10 0 0 1 1.5 5.64 9.65 9.65 0 0 1-1.48 5.55 8.86 8.86 0 0 1-4.38 
                                     3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14Z">
                                    </path>
                                </svg>
                                <svg class="switcher-riot-logo-up app-switcher-riot-logo-up" viewBox="0 0 8 5">
                                    <title>mainMenuUpNonHoverNonBg</title>
                                    <path d="M7.3 2.9 4.7.3c-.4-.4-1-.4-1.4 0L.7 2.9c-.6.6-.2 1.7.7 1.7h5.2c.9 0 1.3-1.1.7-1.7z"></path>
                                </svg>
                            </span>
                        </div>
                        <div data-testid="riotbar:appswitcher2:button-close" class="switcher-desktop-close application-switcher-desktop-close" onClick={this.props.onClose}>
                            <svg viewBox="0 0 32 32">
                                <title>applicationSwitcher2DesktopClose</title>
                                <path d="M0 12C0 5.373 5.373 0 12 0h8c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-8C5.373 32 0 26.627 0 20v-8Z" fill="#BABABA" fill-opacity=".2"></path>
                                <path d="m20.667 12.274-.94-.94L16 15.061l-3.726-3.727-.94.94 3.726 3.727-3.726 3.726.94.94L16 16.941l3.727 3.726.94-.94-3.727-3.726 3.727-3.727Z" fill="#0A0A0A"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div data-testid="riotbar:appswitcher2:menu" class="switcher-content-wrapper riotbar-application-switcher-content-wrapper">
                    <div class="switcher-content-row riotbar-application-switcher-content-row">
                        <div class="switcher-links-wrapper riotbar-application-switcher-links-wrapper">
                            <div id="riotbar-application-switcher-menu-product-section" data-testid="riotbar:appswitcher2:productgroup-0" class="menu-product-section">
                                <div id="riotbar-application-switcher-menu-link-title" data-testid="riotbar:appswitcher2:productgroup-0:title" class="switcher-menu-link-title riotbar-application-switcher-menu-link-title ">
                                    GAMES
                                    <svg class=" " viewBox="0 0 8 5">
                                        <title>mainNavArrowDown</title>
                                        <path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E">\
                                        </path>
                                    </svg>
                                </div>
                                <div id="riotbar-application-switcher-menu-link-wrapper" data-testid="riotbar:appswitcher2:productgroup-0:menu" class="menu-link-wrapper riotbar-application-switcher-menu-link-wrapper ">
                                    <div data-testid="riotbar:appswitcher2:product-title-LEAGUE OF LEGENDS" class="product-title">
                                        <a href="https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card1">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LEAGUE OF LEGENDS" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img1} alt="LEAGUE OF LEGENDS" title="LEAGUE OF LEGENDS" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="product-card-frame-title riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo1} alt="LEAGUE OF LEGENDS" title="LEAGUE OF LEGENDS" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Face off in the ultimate 5v5 battle arena</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">LEAGUE OF LEGENDS</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-VALORANT" class="product-title">
                                        <a href="https://playvalorant.com/en-us/?utm_medium=card2%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card2">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-VALORANT" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img2} alt="VALORANT" title="VALORANT" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo2} alt="VALORANT" title="VALORANT" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Style on your enemies in this 5v5 tactical shooter</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">VALORANT</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-TEAMFIGHT TACTICS" class="product-title">
                                        <a href="https://teamfighttactics.leagueoflegends.com/?utm_medium=card3%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card3">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-TEAMFIGHT TACTICS" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img3} alt="TEAMFIGHT TACTICS" title="TEAMFIGHT TACTICS" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo3} alt="TEAMFIGHT TACTICS" title="TEAMFIGHT TACTICS" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>A TEAM-BUILDING BATTLE OF WITS</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">TEAMFIGHT TACTICS</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-LEGENDS OF RUNETERRA" class="product-title">
                                        <a href="https://playruneterra.com/en-us/?utm_medium=card4%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card4">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LEGENDS OF RUNETERRA" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img4} alt="LEGENDS OF RUNETERRA" title="LEGENDS OF RUNETERRA" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo4} alt="LEGENDS OF RUNETERRA" title="LEGENDS OF RUNETERRA" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Master every moment in this strategy card game</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">LEGENDS OF RUNETERRA</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-LOL: WILD RIFT" class="product-title">
                                        <a href="https://wildrift.leagueoflegends.com/en-us/?utm_medium=card5%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card5">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LOL: WILD RIFT" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img5} alt="LOL: WILD RIFT" title="LOL: WILD RIFT" class="product-card-img" />
                                                    <div class="product-card-logo">
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo5} alt="LOL: WILD RIFT" title="LOL: WILD RIFT" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>LEAGUE OF LEGENDS, NOW ON MOBILE</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">LOL: WILD RIFT</span>
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div id="riotbar-application-switcher-menu-product-section" data-testid="riotbar:appswitcher2:productgroup-0" class="menu-product-section">
                                <div id="riotbar-application-switcher-menu-link-title" data-testid="riotbar:appswitcher2:productgroup-0:title" class="switcher-menu-link-title riotbar-application-switcher-menu-link-title ">
                                    FORGE
                                    <svg class=" " viewBox="0 0 8 5">
                                        <title>mainNavArrowDown</title>
                                        <path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E">\
                                        </path>
                                    </svg>
                                </div>
                                <div id="riotbar-application-switcher-menu-link-wrapper" data-testid="riotbar:appswitcher2:productgroup-0:menu" class="menu-link-wrapper riotbar-application-switcher-menu-link-wrapper ">
                                    <div data-testid="riotbar:appswitcher2:product-title-LEAGUE OF LEGENDS" class="product-title">
                                        <a href="https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card1">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LEAGUE OF LEGENDS" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img1} alt="LEAGUE OF LEGENDS" title="LEAGUE OF LEGENDS" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="product-card-frame-title riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo1} alt="LEAGUE OF LEGENDS" title="LEAGUE OF LEGENDS" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Face off in the ultimate 5v5 battle arena</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">CONV/RGENCE</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-VALORANT" class="product-title">
                                        <a href="https://playvalorant.com/en-us/?utm_medium=card2%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card2">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-VALORANT" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img2} alt="VALORANT" title="VALORANT" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo2} alt="VALORANT" title="VALORANT" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Style on your enemies in this 5v5 tactical shooter</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">HEXTECH MAYHEM</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-TEAMFIGHT TACTICS" class="product-title">
                                        <a href="https://teamfighttactics.leagueoflegends.com/?utm_medium=card3%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card3">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-TEAMFIGHT TACTICS" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img3} alt="TEAMFIGHT TACTICS" title="TEAMFIGHT TACTICS" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo3} alt="TEAMFIGHT TACTICS" title="TEAMFIGHT TACTICS" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>A TEAM-BUILDING BATTLE OF WITS</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">THE MAGESEEKER</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-LEGENDS OF RUNETERRA" class="product-title">
                                        <a href="https://playruneterra.com/en-us/?utm_medium=card4%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card4">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LEGENDS OF RUNETERRA" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img4} alt="LEGENDS OF RUNETERRA" title="LEGENDS OF RUNETERRA" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo4} alt="LEGENDS OF RUNETERRA" title="LEGENDS OF RUNETERRA" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Master every moment in this strategy card game</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">RUINED KING</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-LOL: WILD RIFT" class="product-title">
                                        <a href="https://wildrift.leagueoflegends.com/en-us/?utm_medium=card5%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card5">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LOL: WILD RIFT" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img5} alt="LOL: WILD RIFT" title="LOL: WILD RIFT" class="product-card-img" />
                                                    <div class="product-card-logo">
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo5} alt="LOL: WILD RIFT" title="LOL: WILD RIFT" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>LEAGUE OF LEGENDS, NOW ON MOBILE</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">SONG OF NUNU</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-LOL: WILD RIFT" class="product-title">
                                        <a href="https://wildrift.leagueoflegends.com/en-us/?utm_medium=card5%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card5">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LOL: WILD RIFT" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img5} alt="LOL: WILD RIFT" title="LOL: WILD RIFT" class="product-card-img" />
                                                    <div class="product-card-logo">
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo5} alt="LOL: WILD RIFT" title="LOL: WILD RIFT" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>LEAGUE OF LEGENDS, NOW ON MOBILE</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 7 10">
                                                                            <title>platform_phone_transp</title>
                                                                            <path d="M2.5 8.125a.624.624 0 1 0 1.249.001.624.624 0 0 0-1.249 0ZM0 .938v8.125C0 9.58.42 10 .938 10h4.375c.517 0 .937-.42.937-.937V.938A.938.938 0 0 0 5.312 0H.938A.938.938 0 0 0 0 .938Zm.938 8.007v-7.89c0-.065.052-.117.117-.117h4.14c.065 0 .117.052.117.117v7.89a.118.118 0 0 1-.117.118h-4.14a.118.118 0 0 1-.117-.118Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">RIOT FORGE GAMES</span>
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div id="riotbar-application-switcher-menu-product-section" data-testid="riotbar:appswitcher2:productgroup-0" class="menu-product-section">
                                <div id="riotbar-application-switcher-menu-link-title" data-testid="riotbar:appswitcher2:productgroup-0:title" class="switcher-menu-link-title riotbar-application-switcher-menu-link-title ">
                                    ESPORTS
                                    <svg class=" " viewBox="0 0 8 5">
                                        <title>mainNavArrowDown</title>
                                        <path d="m.707 1.707 2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707Z" fill="#7E7E7E">\
                                        </path>
                                    </svg>
                                </div>
                                <div id="riotbar-application-switcher-menu-link-wrapper" data-testid="riotbar:appswitcher2:productgroup-0:menu" class="menu-link-wrapper riotbar-application-switcher-menu-link-wrapper ">
                                    <div data-testid="riotbar:appswitcher2:product-title-LEAGUE OF LEGENDS" class="product-title">
                                        <a href="https://www.leagueoflegends.com/en-us/?utm_medium=card1%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card1">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-LEAGUE OF LEGENDS" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img1} alt="LEAGUE OF LEGENDS" title="LEAGUE OF LEGENDS" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="product-card-frame-title riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo1} alt="LEAGUE OF LEGENDS" title="LEAGUE OF LEGENDS" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Face off in the ultimate 5v5 battle arena</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">LOL ESPORTS</span>
                                        </a>
                                    </div>
                                    <div data-testid="riotbar:appswitcher2:product-title-VALORANT" class="product-title">
                                        <a href="https://playvalorant.com/en-us/?utm_medium=card2%2Bwww.riotgames.com&amp;utm_source=riotbar" target="_blank" data-interaction-id="riotbar_app-switcher-card_card2">
                                            <div class="product-card">
                                                <div data-testid="riotbar:appswitcher2:card-VALORANT" class="product-card-wrapper riotbar-application-switcher-menu-product-card-wrapper switcher-menu-product-card-wrapper visible">
                                                    <div class="switcher-fake-bg">
                                                    </div>
                                                    <img src={img2} alt="VALORANT" title="VALORANT" class="product-card-img" />
                                                    <div class="product-card-logo" >
                                                        <div class="product-card-logo-wrapper">
                                                            <div class="SoM6Ed7efvUUFCK4AT8SsA== riotbar-application-switcher-menu-product-card-frame-title">
                                                                <img src={logo2} alt="VALORANT" title="VALORANT" />
                                                            </div>
                                                            <div id="riotbar-application-switcher-menu-product-card-frame-description" class="product-card-frame-description">
                                                                <span>Style on your enemies in this 5v5 tactical shooter</span>
                                                            </div>
                                                            <div class="product-icon">
                                                                <div class="product-icon-wrapper">
                                                                    <div class="product-icon-frame-title">
                                                                        <svg width="8" height="8" class="product-icon-frame-description" viewBox="0 0 10 10">
                                                                            <title>platform_windows_transp</title>
                                                                            <path d="M0 1.416 4.087.86l.002 3.929-4.084.023L0 1.416Zm4.085 3.827.003 3.933-4.085-.56V5.218l4.082.026ZM4.58.79 9.998 0v4.741l-5.418.042V.79ZM10 5.279 9.998 10 4.58 9.238l-.008-3.966L10 5.28Z">
                                                                            </path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="-yhSHksEC75TL81rGnMXeQ==">VALORANT ESPORTS</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="right-content-img">
                                <a href="#">
                                    <div className="riotbar-application-card-image-wrapper card-image-wrapper">
                                        <img src={img6} />
                                    </div>
                                    <div className="card-title-wrapper">
                                        <h4 data-testid="riotbar:appswitcher2:card-featured-1:title">Celebrating 5 years of unforgettable moments in VALORANT with an exciting new chapter, ACT III.</h4>
                                    </div>
                                </a>
                            </div>
                            <div className="right-content-img">
                                <a href="#">
                                    <div className="riotbar-application-card-image-wrapper card-image-wrapper">
                                        <img src={img7} />
                                    </div>
                                    <div className="card-title-wrapper">
                                        <h4 data-testid="riotbar:appswitcher2:card-featured-1:title">Do what it takes to get what you want in TFT’s latest futuristic set.</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Formroll);


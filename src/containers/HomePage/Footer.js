import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Footer.scss';
class Footer extends Component {

    render() {
        return (
            <div>
                <footer class="footer">
                    <div class="ruin-smoke-container">
                        <div class="ruin-smoke-container__inner">
                            <div class="ruin-smoke-1">
                            </div>
                            <div class="ruin-smoke-2">
                            </div>
                            <div class="ruin-smoke-3">
                            </div>
                            <div class="ruin-smoke-4">
                            </div>
                        </div>
                    </div>
                    <div class="footer__inner">
                        <div class="content-center">
                            <div class="footer__row">
                                <div class="footer__col">
                                    <div class="footer__col-inner">
                                        <a class="footer__logo" href="/" aria-label="Riot Games">
                                            <span class="icon" style={{ width: "24px", height: "21px", lineheight: "21px" }}>
                                                <span class="is-vhidden">Riot Games</span>
                                                <svg width="38" height="40" dataname="Layer 1" viewBox="0 0 185.47 163.51">
                                                    <path class="cls-1" d="M98.77 0L0 45.74l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74 10.62 60.2 32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.38L98.77 0zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.21-.04.01zM176.17.71V0h3.64v.71zm1.41 3.94V.4h.81v4.25zm3 0V0h.8v4.65zm2.21 0L180.73 0h.83L183 3.41 184.44 0h.84l-2.06 4.65zm1.83 0V0h.81v4.65z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                        <div class="footer__navigation">
                                            <div id="fallback-navigation" class="is-hidden--js">
                                                <ul class="list--unstyled list--inline">
                                                    <li>
                                                        <a href="/who-we-are" class="">
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/work-with-us" class=""></a>
                                                    </li>
                                                    <li>
                                                        <a href="/news" class="">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <nav>
                                                <ul class="list--unstyled list--inline">
                                                    <li>
                                                        <a href="/en/press" class="" data-item="Press">Press</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/security" class="" data-item="Security">Security</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/legal" class="" data-item="Legal">Legal</a></li>
                                                    <li>
                                                        <a href="/en/leadership" class="" data-item="Leadership">Leadership</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/candidate-privacy" class="" data-item="Candidate Privacy">Candidate Privacy</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/terms-of-service" class="" data-item="Terms of Service">Terms of Service</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/privacy-notice" class="" data-item="Privacy Notice">Privacy Notice</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://support.riotgames.com/hc/en-us" class="" target="_blank" rel="noopener noreferrer" data-item="Player Support">Player Support</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/e-verify-right-to-work" class="" data-item="E-Verify">E-Verify</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/accessibility" class="" data-item="Accessibility">Accessibility</a>
                                                    </li>
                                                    <li>
                                                        <a href="/en/annual-reports" class="" data-item="Annual Reports">Annual Reports</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer__col footer__socialList">
                                    <div class="footer__social">
                                        <a target="_blank" rel="noopener" href="https://twitter.com/riotgames" aria-label="twitter">
                                            <span class="icon" style={{ width: "16px", height: "16px", lineheight: "16px" }}>
                                                <span class="is-vhidden">Follow us on Twitter</span>
                                                <svg viewBox="0 0 1200 1227">
                                                    <path d="M714.163 519.284L1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026zM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a target="_blank" rel="noopener" href="https://www.instagram.com/riotgames/" aria-label="instagram">
                                            <span class="icon" style={{ width: "16px", height: "16px", lineheight: "16px" }}>
                                                <span class="is-vhidden">Follow us on Instagram</span>
                                                <svg viewBox="0 0 13.26 13.3">
                                                    <path d="M6.63 3.29a3.43 3.43 0 1 0 3.42 3.44 3.43 3.43 0 0 0-3.42-3.44zm0 5.65a2.22 2.22 0 1 1 2.22-2.22 2.21 2.21 0 0 1-2.22 2.22z" fill="#fdfefe" fill-rule="evenodd">
                                                    </path>
                                                    <path d="M10.96 3.13a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8z" fill="#fdfefe"></path>
                                                    <path d="M6.63.05H3.88a5 5 0 0 0-1.62.31 3.31 3.31 0 0 0-1.18.77 3.31 3.31 0 0 0-.77 1.18 5.29 5.29 0 0 0-.35 1.62v5.5a5.22 5.22 0 0 0 .35 1.62 3.35 3.35 0 0 0 .77 1.19 3.42 3.42 0 0 0 1.18.76 4.75 4.75 0 0 0 1.62.31h5.5a4.75 4.75 0 0 0 1.58-.32 3.15 3.15 0 0 0 1.18-.76 3.35 3.35 0 0 0 .82-1.18 5 5 0 0 0 .31-1.61V3.93a5 5 0 0 0-.31-1.62 3.46 3.46 0 0 0-2-2A5 5 0 0 0 9.33.05a26.88 26.88 0 0 1-2.7 0zm0 1.2h2.69a3.78 3.78 0 0 1 1.24.23 2.21 2.21 0 0 1 1.27 1.27 3.67 3.67 0 0 1 .23 1.23v5.39a3.78 3.78 0 0 1-.23 1.24 2.21 2.21 0 0 1-1.27 1.27 3.77 3.77 0 0 1-1.24.22H3.96a3.77 3.77 0 0 1-1.24-.22 2.21 2.21 0 0 1-1.27-1.27 3.78 3.78 0 0 1-.23-1.24V3.98a3.67 3.67 0 0 1 .21-1.23A2.21 2.21 0 0 1 2.7 1.48a3.78 3.78 0 0 1 1.26-.23c.68.01.89 0 2.67 0z" fill="#fdfefe" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a target="_blank" rel="noopener" href="https://www.tiktok.com/@riotgames" aria-label="tiktok">
                                            <span class="icon" style={{ width: "16px", height: "16px", lineheight: "16px" }}>
                                                <span class="is-vhidden">Follow us on Tiktok</span>
                                                <svg viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm5.653-13.318c.115 0 .23-.007.345-.018H18v-2.33A3.738 3.738 0 0 1 14.552 5h-2.009l-.02 9.774c0 1.2-1.061 2.144-2.262 2.144s-2.175-.972-2.175-2.17c0-1.2.974-2.172 2.175-2.172.067 0 .131.009.196.018l.067.009v-2.096l-.061-.005c-.067-.004-.134-.009-.202-.009A4.257 4.257 0 0 0 6 14.747 4.257 4.257 0 0 0 10.26 19a4.257 4.257 0 0 0 4.261-4.254V8.992a3.745 3.745 0 0 0 3.132 1.69z" fill="#fff"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a target="_blank" rel="noopener" href="https://www.linkedin.com/company/riot-games" aria-label="linkedin">
                                            <span class="icon" style={{ width: "16px", height: "16px", lineheight: "16px" }}>
                                                <span class="is-vhidden">Share this on LinkedIn</span>
                                                <svg viewBox="0 0 16 16">
                                                    <path d="M.3 5.3h3.3V16H.3z"></path>
                                                    <ellipse cx="1.9" cy="1.9" rx="1.9" ry="1.9"></ellipse>
                                                    <path d="M16 16h-3.3v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.4-2 2.7V16H5.7V5.3h3.2v1.5C9.3 5.9 10.4 5 12 5c3.4 0 4 2.2 4 5.1V16z">
                                                    </path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a target="_blank" rel="noopener" href="https://www.facebook.com/RiotGames/" aria-label="facebook">
                                            <span class="icon" style={{ width: "9px", height: "16px", lineheight: "16px" }}>
                                                <span class="is-vhidden">Follow us on Facebook</span>
                                                <svg viewBox="0 0 9 16">
                                                    <path d="M5.7 16V8.7h2.4l.4-2.8H5.7V4c0-.8.2-1.4 1.4-1.4h1.5V.1C8.4.1 7.5 0 6.5 0 4.3 0 2.8 1.3 2.8 3.8v2.1H.3v2.8h2.5V16h2.9z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a target="_blank" rel="noopener" href="https://www.youtube.com/riotgames" aria-label="youtube">
                                            <span class="icon" style={{ width: "19px", height: "13px", lineheight: "13px" }}>
                                                <span class="is-vhidden">Watch on YouTube</span>
                                                <svg viewBox="0 0 19 13">
                                                    <path d="M18.6 2.8s-.2-1.3-.7-1.8C17.2.3 16.4.3 16 .2 13.4 0 9.5 0 9.5 0S5.6 0 3 .2c-.4 0-1.1 0-1.9.8-.5.5-.7 1.8-.7 1.8s-.2 1.5-.2 3v1.4c0 1.5.2 3 .2 3s.2 1.3.7 1.8c.7.7 1.6.7 2 .8 1.6.2 6.4.2 6.4.2s3.9 0 6.5-.2c.4 0 1.1 0 1.9-.8.6-.6.7-1.8.7-1.8s.2-1.5.2-3V5.8l-.2-3zm-11 6.1V3.7l5 2.6-5 2.6z"></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="separator">
                            </div>
                            <div class="footer__row">
                                <div class="footer__col">
                                    <div class="footer__cookie">
                                        <button class="js-cookie-preference-trigger">Cookie Preferences</button>
                                    </div>
                                    <small class="footer__small">
                                        <span class="icon is-hidden-mobile" aria-hidden="true" style={{ width: "2px", height: "20px", lineheight: "20px" }}>
                                            <svg viewBox="0 0 2 40">
                                                <path d="M1.7 4.2s.1-.1 0-.1c.1-.3 0-1.8 0-2.1.1-.5 0-.8.2-1.2 0 0-.2-.5-.2-.1 0-.2-.1 0-.2 0V.6C1.4.6.9.6.9.3.7.5.5.1.3.3.1.5.3 1.4.3 1.7c-.1.4-.1 1.2-.1 2-.1 3 0 6.1-.1 9.1 0 1 0 2-.1 3 0 1.6.2 3.2.2 4.8 0 2.7-.1 5.5 0 8.2 0 2 0 4 .1 5.9.1 1 .2 2.6 0 3.3-.1.2 0 .7 0 .9 0 .1.1.5.1.4.3 0 .2.6.4.7.4.3.5-.4.6-.7.3.3.2-.8.2-1v-8.6c0-3.5.1-7 .1-10.5v-4.5c0-.3-.1-1 .1-1.2V8.9c0-.8-.1-1.6 0-2.4 0-.5-.1-1.4.1-1.7-.2-.2-.2-.4-.2-.6M1.8.5s0 .1 0 0zM.3 38.3zM1.8.7c0-.1 0-.1 0 0z"></path>
                                            </svg>
                                        </span>© 2025 Riot Games, Inc. All Rights Reserved.</small>
                                </div>
                                <div class="footer__col">
                                    <div class="separator is-hidden-desktop">
                                    </div>
                                    <div class="footer__top-link monospace">
                                        <a href="#top">To the Surface<span class="icon" aria-hidden="true" style={{ width: "8px", height: "7px", lineheight: "7px" }}>
                                            <svg viewBox="0 0 8 7">
                                                <path d="M8 6.6c-.2.3-.4.4-.8.4H6c-.4-.1-.7-.2-1-.1-.6.1-1.3.1-1.9.1-.4 0-.7-.2-1.1-.1-.5.2-1.1 0-1.8.1-.1-.4-.2-.8-.2-1.3 0-.2-.1-.4.1-.6.1-.1.1-.2.2-.2s.1-.1.2-.1c.3-.1.3-.2.5-.5v-.6c.3-.5.8-.8 1-1.4 0 0 0-.1-.1-.1 0 0 0-.1.1-.1 0-.2-.1-.4-.1-.5.3-.5.7-.8 1-1.2.1-.2.3-.3.4-.4h.3c.3.4.4.8.5 1.2.5.6 1 1.2 1.6 1.8.2.3.3.5.4.8.2.4.5.7.8 1 .1.1.2.1.4.2.1 0 .3.1.4.1.1.3.2.6.2 1 0 .2.1.3.1.5z"></path>
                                            </svg>
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Careers.scss';
import img1 from '../../../assets/images/annie.jpg'
class Careers extends Component {

    render() {
        return (
            <div className="section-Careers">
                <div className="Careers-block">
                    <div className="Careers-content">
                        <div className="Careers-content-inner">
                            <h2>We’re hiring!</h2>
                            <p>Team up with Riot to forge your path and craft unforgettable experiences for players</p>
                            <div class="Careers-jobs" >
                                <a href="#" class="careers__jobs__count" target="_blank">
                                    <span>135</span>Open positions
                                </a>
                                <a href="#" class="careers__jobs__count" target="_blank">
                                    <span>25</span>Offices
                                </a>
                            </div>
                            <a target="_blank" rel="noopener" class="button-standard">
                                <span>Explore Careers</span>
                            </a>
                        </div>
                        <div class="careers__image">
                            <picture>
                                <img src={img1} alt="Careers" />
                            </picture>

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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Careers);

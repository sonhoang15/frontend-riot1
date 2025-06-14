import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Newfeed from './Section/Newfeed';
import Game from './Section/Game';
import Esports from './Section/Esports';
import Entertainment from './Section/Entertainment';
import Careers from './Section/Careers';
import Footer from './Footer';
import Formroll from './Section/Formroll';
import './HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Formroll />
                <Newfeed />
                <Game />
                <Esports />
                <Entertainment />
                <Careers />
                <Footer />
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

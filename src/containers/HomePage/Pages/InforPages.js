import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderInforPages from './HeaderInforPages';
import "./InforPages.scss";
import { getAllLocationService } from '../../../services/userService';
import img1 from '../../../assets/images/penguinTFT.avif'
import Footer from '../Footer'
class InforPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inforPages: {}
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.location_id) {
            let id = this.props.match.params.location_id
            let res = await getAllLocationService(id);
            if (res && res.errCode === 0) {
                this.setState({
                    inforPages: res.data
                })
            }
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        console.log("l", this.state)
        let { language } = this.props;
        let { inforPages } = this.state;
        return (
            <>
                <HeaderInforPages />
                <div className="page-infor-container">
                    <div className="banner-container" >
                        <div class="banner-infor">
                            <div class="background-img" data-testid="backdrop">
                                <div class="layout-img" data-testid="backdrop-background">
                                    <img src={img1} alt="" loading="lazy" class="background-image" role="presentation" data-testid="mediaImage" />
                                </div>
                            </div>
                            <div class="width-medium" data-testid="blade-content">
                                <img src={img1} alt="" loading="lazy" class="banner-image" data-testid="banner-image" />
                            </div>
                        </div>
                        <div class="content-container">
                            <div class="header">
                                <h1 data-testid="title" className="title">
                                    {language === 'vi' ? inforPages.value_Vi : inforPages.value_En}
                                </h1>
                                <div class="richText sc-afdfefb9-0 gyxpYp" data-testid="tagline">
                                    <div class="sc-4225abdc-0 lnNUuw" data-testid="rich-text-html">
                                        <div>Mời bạn tới dự Tiệc Pengu.</div>
                                    </div>
                                </div>
                            </div>
                            <div class="divider">
                            </div>
                            <div class="metadata-with-links">
                                <div class="metadata">
                                    <a role="button" class="metadata-button">
                                        <span>Cập Nhật Trò Chơi</span>
                                    </a>
                                    <div class="authors">
                                        <span>Katie "Riot Ukime" Guo</span>
                                    </div>
                                    <time datetime="2025-05-26T16:00:00.000Z">26/5/2025</time>
                                </div>
                                <div class="social-links"></div>
                            </div>
                        </div>
                    </div>
                    <div className="document">
                        <div className="document-text">
                            <div className="document-markdown">
                                {inforPages && inforPages.markdown && inforPages.markdown.contentHTML
                                    && <div dangerouslySetInnerHTML={{ __html: inforPages.markdown.contentHTML }}>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InforPages);

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './ContentManager.scss';
import * as actions from '../../store/actions';
import { crud_actions, languages } from '../../utils';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { getAllLocationService } from '../../services/userService';

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ContentManages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedOption: '',
            listPages: [],
            selectedSection: null,
            locations: [],       // Danh sách location CON của section được chọn
            selectedLocation: null,
            buttonSave: false
        }
    }

    componentDidMount() {
        this.props.fetchAllPages()
    }
    buidDataInputSelect = (inputData) => {
        let result = [];
        let { language } = this.props;
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.value_Vi}`;
                let labelEn = `${item.value_En}`
                object.label = language === languages.VI ? labelVi : labelEn;
                object.value = item.PageId;
                object.locations = item.locations || [];
                result.push(object)
            })

        }
        return result;

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allPages !== this.props.allPages) {
            let dataSelect = this.buidDataInputSelect(this.props.allPages)
            this.setState({
                listPages: dataSelect
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buidDataInputSelect(this.props.allPages)
            this.setState({
                listPages: dataSelect
            })
        }
    }
    handleEditorChange = ({ html, text }) => {
        console.log("hchange:", html, text)
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        });
    }
    handleSaveContentMarkdown = () => {
        let { buttonSave } = this.state
        this.props.saveInforPage({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            PageId: this.state.selectedOption.value,
            location_id: this.state.selectedLocation?.value || null,
            action: buttonSave === true ? crud_actions.EDIT : crud_actions.CREATE,
        })

    }
    handleChange = async (selectedOption) => {
        this.setState({
            selectedOption,
            selectedSection: selectedOption.value,
            selectedLocation: null,

            locations: selectedOption.locations.map(locations => ({
                label: this.props.language === languages.VI ? locations.value_Vi : locations.value_En,
                value: locations.location_id || locations.id // Tùy backend trả ra key gì
            }))
        });
        try {
            let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/all-location?pageId=${selectedOption.value}`, {
                credentials: 'include'
            });
            let data = await res.json();
            if (data.errCode === 0) {
                let locationOptions = data.data.map(loc => ({
                    label: this.props.language === languages.VI ? loc.value_Vi : loc.value_En,

                    value: loc.location_id,
                }));
                this.setState({ locations: locationOptions });
            } else {
                this.setState({ locations: [] });
            }
        } catch (error) {
            console.error(error);
            this.setState({ locations: [] });
        }
    };
    handleLocationSelect = async (selectedLocation) => {
        this.setState({ selectedLocation });
        try {
            let res = await getAllLocationService(selectedLocation.value);
            console.log("check res", res)
            if (res && res.errCode === 0 && res.data && res.data.markdown) {
                let markdown = res.data.markdown;
                this.setState({
                    contentMarkdown: markdown.contentMarkdown,
                    contentHTML: markdown.contentHTML,
                    buttonSave: true,
                });
            } else {
                this.setState({
                    contentMarkdown: '',
                    contentHTML: '',
                    buttonSave: false
                });
            }
        } catch (err) {
            console.error(err);
        }
    };
    render() {
        let { buttonSave } = this.state
        return (
            <div className="content-manages-container">
                <div className="title text-center">Manage Content</div>
                <div className="select-pages-container">
                    <label>Select section:</label>
                    <Select
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.listPages}
                        className="form-control"
                    />
                </div>
                <div className="select-pages-container">
                    <label>Select location:</label>
                    <Select
                        value={this.state.selectedLocation}
                        // onChange={selectedLocation => this.setState({ selectedLocation })}
                        onChange={this.handleLocationSelect}
                        options={this.state.locations}
                        className="form-control"
                        isDisabled={!this.state.selectedOption}
                    />
                </div>
                <div className="markdown-container">
                    <MdEditor
                        style={{ height: '500px' }}
                        renderHTML={text => mdParser.render(text)}
                        onChange={this.handleEditorChange}
                        value={this.state.contentMarkdown}
                    />
                </div>
                <button className={buttonSave === true ? "btn btn-primary mt-3 mb-3" : "mt-3 btn btn-success mb-3"}
                    onClick={() => this.handleSaveContentMarkdown()}>
                    {buttonSave === true ?
                        <span>save</span> : <span>create infor</span>
                    }
                </button>
            </div>


        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allPages: state.admin.allPages,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllPages: (id) => dispatch(actions.fetchAllPages()),
        saveInforPage: (data) => dispatch(actions.saveInforPage(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentManages);

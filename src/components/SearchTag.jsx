import React, { Component } from 'react';
import TagService from '../service/TagService';
import { Formik, Form, Field } from 'formik';
import QuestionService from '../service/QuestionService';
import RadioButton from './RadioButton';


class SearchTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tags: [],
            tagId: ''
        }
        this.retrieveAllTags = this.retrieveAllTags.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
        this.dropdownChanged = this.dropdownChanged.bind(this)
    }

    componentDidMount() {
        this.retrieveAllTags();
    }

    retrieveAllTags() {
        TagService.retrieveAllTags()
            .then(
                response => {
                    this.setState({
                        tags: response.data
                    })
                }
            )
    }

    dropdownChanged(e) {
        this.setState({ tagId: e.target.value });
    }

    handleSumbit(values) {
        QuestionService.GetByTag(this.state.tagId)
            .then(() => this.props.history.push('/QuestionList'))
    }

    render() {
        let { tags, tagId } = this.state;
        return (

            <div>
                <h1>Get Questions by subject</h1>
                <div className="container">
                    <Formik
                        initialValues={{ tags }}
                        onSubmit={this.handleSumbit}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {(props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <Field as="select" name="tags"  value={tagId} onChange={this.dropdownChanged.bind(this)}>
                                        {tags.map(tag =>
                                            <option key={tag.tagId} value={tag.tagId}>{tag.name}</option>
                                        )}
                                    </Field>
                                </fieldset>

                                <div>
                                    <button className="btn btn-success" type="submit">
                                        Submit
                                </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }


}



export default SearchTag
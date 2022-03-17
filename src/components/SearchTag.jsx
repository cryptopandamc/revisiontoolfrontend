import React, { Component } from 'react';
import TagService from '../service/TagService';
import { Formik, Form, Field, ErrorMessage } from 'formik';


class SearchTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }
        this.retrieveAllTags = this.retrieveAllTags.bind(this)
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

    render() {
        let { tags } = this.state;
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
                                    <Field as="select" name="tags" >
                                        {tags.map((tag, tagId) => (
                                            <option key={tag.tagId}>
                                                {tag.name}
                                            </option>
                                        ))}
                                    </Field >
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
import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';
import TagService from '../service/TagService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RadioButton from './RadioButton';

class AddQuestion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questionText: '',
            answers: [],
            correctAnswer: '',
            tags: []
        }
        this.retrieveAllTags = this.retrieveAllTags.bind(this)
        this.handleSumbit = this.handleSumbit.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    handleSumbit(values) {
        let question = {
            questionText: values.questionText,
            answers: values.answers,
            correctAnswer: values.correctAnswer,
            tags: values.tags
        }
        QuestionService.AddQuestion(question)
            .then(() => this.props.history.push('/QuestionList'))
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    render() {
        let { questionText, answers, correctAnswer, tags } = this.state;
        return (

            <div>
                <h1>Add A Question</h1>
                <div className="container">
                    <Formik
                        initialValues={{ questionText, answers, correctAnswer, tags }}
                        onSubmit={this.handleSumbit}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {(props) => (
                            <Form>
                                <ErrorMessage name="question.questionText" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Question Text: </label>
                                    <Field className="form-control" type="text" name="questionText"></Field>
                                </fieldset>

                                

                                <fieldset className="form-group">
                                    <Field as="select" name="tags" multiple>
                                        {tags.map((tag, tagId) => (
                                            <option key={tag.tagId}>
                                                {tag.name}
                                            </option>
                                        ))}
                                    </Field >
                                </fieldset>
                               

                                <div>
                                    <label>Answer A</label>
                                    <div>
                                    <Field name="answers[0].answerText" />
                                    </div>
                                     <div>
                                    <label>Answer B</label>
                                    </div>
                                     <div>
                                    <Field name="answers[1].answerText" />
                                    </div>
                                     <div>
                                    <label>Answer C</label>
                                    </div>
                                     <div>
                                    <Field name="answers[2].answerText" />
                                    </div>
                                     <div>
                                    <label>Answer D</label>
                                    </div>
                                     <div>
                                    <Field name="answers[3].answerText" />
                                    </div>
                                </div>

                                <Field
                                    component={RadioButton}
                                    name="correctAnswer"
                                    id="A"
                                    label="A"
                                />
                                <Field
                                    component={RadioButton}
                                    name="correctAnswer"
                                    id="B"
                                    label="B"
                                />
                                <Field
                                    component={RadioButton}
                                    name="correctAnswer"
                                    id="C"
                                    label="C"
                                />
                                <Field
                                    component={RadioButton}
                                    name="correctAnswer"
                                    id="D"
                                    label="D"
                                />
                                <button className="btn btn-success" type="submit">
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        );
    }

}

export default AddQuestion

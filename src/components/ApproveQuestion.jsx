import React, { Component } from 'react';
import QuestionService from '../service/QuestionService';
import TagService from '../service/TagService';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RadioButton from './RadioButton';

const handleUpdate = () => {
    console.log("change value...")
  }

class ApproveQuestion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questionId: this.props.match.params.questionId,
            questionText: '',
            answers: [],
            correctAnswer: '',
            tags: [],
            currentTags: []
        }
        this.retrieveAllTags = this.retrieveAllTags.bind(this)
        this.approveQuestionClicked = this.approveQuestionClicked.bind(this)
      //  this.handleChange = this.ApproveQuestion.bind(this)
    }

    componentDidMount() {
        QuestionService.RetrieveOneQuestion(this.state.questionId).then((response) => {
            this.setState({
                questionText: response.data.questionText,
                answers: response.data.answers,
                correctAnswer: response.data.correctAnswer,
                tags: response.data.tags
            })
        })
        this.retrieveAllTags()
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

    approveQuestionClicked(values) {
        let question = {
            questionId: this.state.questionId,
            questionText: values.questionText,
            answers: values.answers,
            correctAnswer: values.correctAnswer,
            tags: values.tags
        }
        QuestionService.ApproveQuestion(this.state.questionId, question)
            .then(() => this.props.history.push('/QuestionList'))
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    render() {
        let { questionId, question, questionText, answers, correctAnswer, tags } = this.state;
        return (

            <div>
                <h1>Approve this Question</h1>
                <div className="container">
                <Formik
                        initialValues={{ questionText, answers, correctAnswer, tags }}
                        onSubmit={this.approveQuestionClicked}
                        validateOnChange={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {(props) => (
                            <Form>
                                <ErrorMessage name="question.questionText" component="div" className="alert alert-warning" />
                                <fieldset className="form-group">
                                    <label>Question Text: </label>
                                    <Field className="form-control" type="text" name="questionText" value={questionText} required></Field>
                                </fieldset>

                                <fieldset className="form-group">
                                    <Field as="select" name="tags" multiple value={this.state.tags}>
                                        {tags.map((tag, tagId) => (
                                            <option key={tag.tagId} value={tags} selected={tags}>
                                                {tag.name}
                                            </option>
                                        ))}
                                    </Field >
                                </fieldset>

                                <div>
                                    <label>Answer A</label>
                                    <div>
                                        <Field name="answers[0].answerText" required />
                                    </div>
                                    <div>
                                        <label>Answer B</label>
                                    </div>
                                    <div>
                                        <Field name="answers[1].answerText" required />
                                    </div>
                                    <div>
                                        <label>Answer C</label>
                                    </div>
                                    <div>
                                        <Field name="answers[2].answerText" required />
                                    </div>
                                    <div>
                                        <label>Answer D</label>
                                    </div>
                                    <div>
                                        <Field name="answers[3].answerText" required />
                                    </div>
                                </div>

                                <fieldset className="form-group" required>
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

export default ApproveQuestion
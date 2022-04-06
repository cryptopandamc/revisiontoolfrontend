import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RadioButton from './RadioButton';
import QuestionService from '../service/QuestionService'
import TagService from '../service/TagService'


class FormikClass extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questionText: '',
            answers: [],
            correctAnswer: '',
            tags: []
        }
        this.retrieveAllTags = this.retrieveAllTags.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
    }

    componentDidMount() {
        this.retrieveAllTags();
    }

    retrieveAllTags = () => {
        TagService.retrieveAllTags()
            .then(
                response => {
                    this.setState({
                        tags: response.data
                    })
                }
            )
    }

    addQuestion = (question) => {
        QuestionService.AddQuestion(question)
            .then(() => this.props.history.push('/QuestionList'))
    }

    getTagsById = (tags) => {
        let newTags = [];
        tags.map((tagId) => {
            newTags.push(this.state.tags.filter((tag) => {
                return (tag.tagId === Number(tagId)) //tag.tagId > Number(tagId) 
            })[0]
            )
            return "hello";
        })
        return newTags;
    }

    render() {
        return (

            <Formik

                initialValues={{ questionText: '', tags: [], answers: [], correctAnswer: '' }}
                validationSchema={Yup.object({
                    questionText: Yup.string()
                        .required('Required'),
                    tags: Yup.array().of(Yup.string())
                        .required('Required'),
                    answers: Yup.array().of(Yup.string())
                        .required('Required'),
                    correctAnswer: Yup.string()
                        .required('Required')
                })}

                onSubmit={(values, { setSubmitting }) => {
                    let packet = { ...values };
                    let tags = this.getTagsById(values.tags);
                    packet.tags = tags;
                    this.addQuestion(packet);
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);

                }}

            >
                <div>
                    <Form>
                        <label htmlFor="questionText">Question Text</label>
                        <Field className="form-control" type="text" name="questionText" required></Field>
                        <ErrorMessage name="questionText" />

                        <label htmlFor="tags">Add topics</label>
                        <Field as="select" name="tags" multiple>
                            {this.state.tags.map((tag) => (
                                <option key={tag.tagId} value={tag.tagId}>
                                    {tag.name}
                                </option>
                            ))}
                        </Field >
                        <ErrorMessage name="tags" />

                        <div>
                            <label>Answer A</label>
                            <div>
                                <Field name="answers[0]" required />
                                <ErrorMessage name="answers" />
                            </div>
                            <div>
                                <label>Answer B</label>
                            </div>
                            <div>
                                <Field name="answers[1]" required />
                                <ErrorMessage name="answers" />
                            </div>
                            <div>
                                <label>Answer C</label>
                            </div>
                            <div>
                                <Field name="answers[2]" required />
                                <ErrorMessage name="answers" />
                            </div>
                            <div>
                                <label>Answer D</label>
                            </div>
                            <div>
                                <Field name="answers[3]" required />
                                <ErrorMessage name="answers" />
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
                        <button type="submit">Submit</button>

                    </Form>
                </div>
            </Formik>

        );

    }


}

export default FormikClass

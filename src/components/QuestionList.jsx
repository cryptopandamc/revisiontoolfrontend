import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuestionService from '../service/QuestionService';

class QuestionList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            questions: [],
        };

        this.loadQuestions = this.loadQuestions.bind(this);
        this.updateQuestionClicked = this.updateQuestionClicked.bind(this);

    }

    componentDidMount() {
        this.loadQuestions();
    }

    loadQuestions() {
        QuestionService.GetQuestions()
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        questions: response.data,
                    })
                    console.log(this.state)
                }
            )
    }

    updateQuestionClicked(questionId) {
        this.props.history.push(`/EditQuestion/${questionId}`)
    }

    render() {


        console.log(this.state);
        return (

            <div className="container">

                <div className="col-md-12">
                    <h4>Basic questions list</h4>


                    <TableContainer component={Paper}>
                        <Table stickyHeader aria-label="sticky table">

                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Question Text</TableCell>
                                    <TableCell align="right">Option A</TableCell>
                                    <TableCell align="right">Option B</TableCell>
                                    <TableCell align="right">Option C</TableCell>
                                    <TableCell align="right">Option D</TableCell>
                                    <TableCell align="right">Edit Question</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.state.questions.map((question) => (
                                    <TableRow key={question.questionId}>
                                        <TableCell align="right">{question.questionText}</TableCell>
                                        {question.answers.map((answer) => (
                                            <TableCell key={answer.answerId}>{answer.answerText}</TableCell>
                                        ))}
                                        <TableCell>
                                            <button className="btn btn-warning" onClick={() => this.updateQuestionClicked(question.questionId)}>Edit Question</button>
                                        </TableCell>
                                    </TableRow>
                                ))}


                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </div >



        );
    }
}


export default QuestionList
import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuestionService from '../service/QuestionService';

class UnapprovedQuestions extends Component {


    constructor(props) {
        super(props);
        this.state = {
            questionId: this.props.match.params.questionId,
            questions: [],
        };

        this.GetQuestionsNotApproved = this.GetQuestionsNotApproved.bind(this);
        this.approveQuestionClicked = this.approveQuestionClicked.bind(this);
        this.approveQuestion = this.approveQuestion.bind(this);
    }

    componentDidMount() {
        this.GetQuestionsNotApproved();
    }

    GetQuestionsNotApproved() {
        QuestionService.GetQuestionsNotApproved()
            .then(
                response => {
                    this.setState({
                        questions: response.data,
                    })
                }
            )
    }

    approveQuestion(questionId, values) {
       
     this.props.history.push(`/ApproveQuestion/${questionId}`)
    }

    approveQuestionClicked(questionId, question) {
     //   QuestionService.ApproveQuestion(questionId, question);
        this.props.history.push(`/ApproveQuestion/${questionId}`)
    }

    render() {


        return (

            <div className="container">

                <div className="col-md-12">
                    <h4>Unapproved questions list</h4>


                    <TableContainer component={Paper}>
                        <Table stickyHeader aria-label="sticky table">

                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Question Text</TableCell>
                                    <TableCell align="right">Option A</TableCell>
                                    <TableCell align="right">Option B</TableCell>
                                    <TableCell align="right">Option C</TableCell>
                                    <TableCell align="right">Option D</TableCell>
                                    <TableCell align="right">Correct answer</TableCell>
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
                                        <TableCell>{question.correctAnswer}</TableCell>
                                         <TableCell>   <button className="btn btn-warning" onClick={() => this.approveQuestionClicked(question.questionId)}>Approve Question</button></TableCell>
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


export default UnapprovedQuestions
import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuestionService from '../service/QuestionService';

class GetByTag extends Component {


    constructor(props) {
        super(props);
        this.state = {
            tagId: this.props.match.params.tagId,
            questions: [],

        };
        this.loadQuestionsByTag = this.loadQuestionsByTag.bind(this);


    }

    componentDidMount() {
        this.loadQuestionsByTag(this.state.tagId);
    }

    loadQuestionsByTag(tagId) {
        QuestionService.GetByTag(tagId)
            .then(
                response => {
                    this.setState({
                        questions: response.data,
                    })
                }
            )
    }


    render() {


        return (

            <div className="container">

                <div className="col-md-12">
                    <h4> questions by tag</h4>


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
                                            <button className="btn btn-warning" onClick={() => this.updateQuestionClicked(question.questionId)}>Get questions on this topic</button>
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


export default GetByTag 

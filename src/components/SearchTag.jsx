import React, { Component } from 'react';
import TagService from '../service/TagService';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import QuestionService from '../service/QuestionService';

class SearchTag extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tags: [],
        }

        this.retrieveAllTags = this.retrieveAllTags.bind(this)
        this.getTagsClicked = this.getTagsClicked.bind(this)
    }

    componentDidMount() {
        this.retrieveAllTags();
    }

    retrieveAllTags() {
        TagService.retrieveAllTags()
            .then(
                response => {
                    this.setState({
                        tags: response.data,
                    })
                }
            )
    }


    getTagsClicked(tagId) {
        this.props.history.push(`/GetByTag/${tagId}`)
    }

    render() {

        return (

            <div className="container">

                <div className="col-md-12">
                    <h4>Choose questions from these subjects</h4>


                    <TableContainer component={Paper}>
                        <Table stickyHeader aria-label="sticky table">

                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Tag</TableCell>
                                    <TableCell align="right">Tag</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.state.tags.map((tag) => (
                                    <TableRow key={tag.tagId}>
                                        <TableCell align="right">{tag.name}</TableCell>
                                        <TableCell align="right">
                                        <button className="btn btn-warning" onClick={() => this.getTagsClicked(tag.tagId)}>Get Questions on this Topic</button>
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



export default SearchTag
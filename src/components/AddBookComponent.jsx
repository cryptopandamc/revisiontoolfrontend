import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import BookService from '../services/BookService'
import PublisherService from '../services/PublisherService'
import AuthorService from '../services/AuthorService';

class AddBookComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
           // id: this.props.match.params.id,
			title: '',
			isbn: '',
			pages: '',
            publishedDate: '',
            authors: [],
            publisher: '',
        
           
			
            publishers: [
				{
					
				},
			],
        }
        
		this.onSubmit = this.onSubmit.bind(this)
		this.retrieveAllAuthors = this.retrieveAllAuthors.bind(this)
		this.retrieveAllPublishers = this.retrieveAllPublishers.bind(this)
       
    }

	componentDidMount() {
		this.retrieveAllAuthors();
	   
		this.retrieveAllPublishers();
    }
    onSubmit(values) {
        let book = {
			//id: this.state.id,
			title: values.title,
            isbn: values.isbn,
            pages: values.pages,
            publishedDate: values.publishedDate,
            authors: values.authors,
            publisher: values.publisher
        }
        BookService.addBook(book)
        .then(() => this.props.history.push('/books') )
    }

    
	retrieveAllAuthors() {
        AuthorService.retrieveAllAuthors()
            .then(
                response => {
                    console.log(response)
                    this.setState({
                        authors: response.data
					})
                }
            )
	}
	
	retrieveAllPublishers() {
        PublisherService.retrieveAllPublishers()
        .then(
            response => {
                this.setState({
                    publishers: response.data
				})
            }
        )
    }




    render() {
        let { title, isbn, pages, publishedDate, authors, publisher, publishers } = this.state;
        return (

            <div>
				<h1>Add A Book</h1>
				<div className="container">
					<Formik
						initialValues={{ title, isbn, pages, publishedDate, authors, publisher, publishers }}
						onSubmit={this.onSubmit}
						validateOnChange={false}
						validate={this.validate}
						enableReinitialize={true}
					>
						{(props) => (
							<Form>
								<ErrorMessage name="title" component="div" className="alert alert-warning" />
								<fieldset className="form-group">
									<label>Title: </label>
									<Field className="form-control" type="text" name="title"></Field>
								</fieldset>
								<ErrorMessage name="isbn" component="div" className="alert alert-warning" />
								<fieldset className="form-group">
									<label>isbn: </label>
									<Field className="form-control" type="text" name="isbn"></Field>
								</fieldset>
                                <ErrorMessage name="pages" component="div" className="alert alert-warning" />
								<fieldset className="form-group">
									<label>pages: </label>
									<Field className="form-control" type="number" name="pages"></Field>
								</fieldset>
								<fieldset className="form-group">
									<label>publishedDate: </label>
									<Field className="form-control" type="date" name="publishedDate"></Field>
								</fieldset>
								<fieldset className="form-group">
								<select multiple name="authors">
                                    {authors.map((author, id) => (
										<option key={author.id}>
											{author.firstname}  {author.lastname}
										</option>
									))}
                                   </select>
								   </fieldset>
								   <fieldset className="form-group">
                                   <select name="publisher">
                                    {publishers.map((publisher, id) => (
										<option key={publisher.id} name="publisher">
											{publisher.name} {publisher.address} 
										</option>
									))}
                                   </select>
								</fieldset>
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

export default AddBookComponent

	
	
	

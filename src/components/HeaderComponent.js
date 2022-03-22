import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './../java.ico';


class HeaderComponent extends Component {

    render() {

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link className="nav-link" to="/header" > </Link></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/AddQuestion">Add a question</Link></li>
                        <li><Link className="nav-link" to="/QuestionList">Question List</Link></li>                        
                        <li><Link className="nav-link" to="/SearchTag">Search questions by subject</Link></li>                        
                        <li><Link className="nav-link" to="/UnapprovedQuestions">Show questions that require approval</Link></li>                        
                    </ul>
                </nav>
            </header>
        );

    }

}
export default withRouter(HeaderComponent)
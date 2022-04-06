import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormComponent from './FormComponent';
import HeaderComponent from './HeaderComponent'
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion'
import EditQuestion from './EditQuestion'
import SearchTag from './SearchTag'
import GetByTag from './GetByTag'
import UnapprovedQuestions from './UnapprovedQuestions'
import ApproveQuestion from './ApproveQuestion'
import SignUpForm from './SignUpForm'
import FormikClass from './FormikClass'



class ReviseApp extends Component {

    render() {
        return (
            <div>
                <div >
                    <Router>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/form/" component={FormComponent} />
                            <Route path="/QuestionList/" component={QuestionList} />
                            <Route path="/AddQuestion/" component={AddQuestion} />
                            <Route path="/EditQuestion/:questionId/" component={EditQuestion} />
                            <Route path="/SearchTag" component={SearchTag} />
                            <Route path="/GetByTag/:tagId" component={GetByTag} />
                            <Route path="/UnapprovedQuestions" component={UnapprovedQuestions} />
                            <Route path="/ApproveQuestion/:questionId" component={ApproveQuestion} />
                            <Route path="/SignUpForm" component={SignUpForm} />
                            <Route path="/FormikClass" component={FormikClass} />     
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}


export default ReviseApp;
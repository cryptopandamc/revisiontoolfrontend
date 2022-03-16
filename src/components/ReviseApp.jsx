import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormComponent from './FormComponent';
import HeaderComponent from './HeaderComponent'
import QuestionList from './QuestionList';
import AddQuestion from './AddQuestion'


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
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}


export default ReviseApp;
import React from 'react';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// Division de codigo basada en rutas -> https://es.reactjs.org/docs/code-splitting.html

const App = () => {
    return (
        <Router>
            <Container className="mt-3">
                <Switch>
                    <Router
                        path="/content/:path?"
                        render={(props) => <Dir key={props.match.params.path} {...props} />}
                    />
                    <Route path="/">
                        <Redirect to="/content/"/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
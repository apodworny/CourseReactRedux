import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
        <div>
        <h1>Page One</h1>
            <Link to="/pagetwo">Navigate to page two</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            <div>PageTwo</div>
            <button>Click me</button>
        </div>
    );
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
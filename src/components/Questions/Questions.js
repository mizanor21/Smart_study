import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className="question-part">
            <h2>Frequently Asked Questions</h2>
            <div className="question">
                <h3>How does react work?</h3>
                <p><strong>Answer:</strong> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p><br />
                <h3>What are the differences between props and state ?</h3>
                <p><strong>Answer:</strong><br />
                    Props: <br /> <li>The Data is passed from one component to another.</li><li>It is Immutable (cannot be modified).</li><li>Props can be used with state and functional components.</li><li>Props are read-only.</li>
                    <br />
                    State: <br /> <li>The Data is passed within the component only.</li><li>IIt is Mutable ( can be modified).</li><li>State can be used only with the state components/class component (Before 16.0).</li><li>State is both read and write.</li></p><br />
                <h3>Why we use useEffect in react?</h3>
                <p><strong>Answer:</strong> By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>
        </div>
    );
};

export default Questions;
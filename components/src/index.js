import React from 'react'
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" time="Today at 4pm" text="First" avatar={faker.image.avatar()} />    
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" time="Today at 3pm" text="Second" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" time="Today at 2pm" text="Third" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>New card with plain text</ApprovalCard>
            <ApprovalCard>
                <h4>Warning</h4>
                <p>This is a card</p>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    comment="Nice blog post Sam!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    comment="Nice blog post Alex!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:35PM"
                    comment="Nice blog post Jane!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
}

// Take the react component and show it on screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

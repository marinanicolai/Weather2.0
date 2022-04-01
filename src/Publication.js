import React from 'react';
import {useParams, useRouteMatch, Link,Route} from 'react-router-dom';
import Issues from './Issues';

function Publication(props) {
    const {path, url} = useRouteMatch();
    const {id} = useParams();

    const newsLetter = props.newsLetters.find(item=> item.id === id);
    return (
        <div>
            <h1>{newsLetter.name}</h1>
            <p>{newsLetter.description}</p>
            <ul>
                {newsLetter.issues.map(issue=> (
                    <li><Link to={`${url}/${issue.id}`}>{issue.name}</Link></li>
                ))}
            </ul>
            <hr />
            <Route path={`${path}/:id`}>
                <Issues 
                    newsLetters={props.newsLetters} 
                    newsLetter={newsLetter}
                />
            </Route>
        </div>
    );
}


export default Publication;
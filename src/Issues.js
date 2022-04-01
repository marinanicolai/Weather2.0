import React from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';

function Issues(props) {
    const {url} = useRouteMatch();
    const {id} = useParams();

    const issueLink = props.newsLetter.issues.find(issue => issue.id === id);
    return (
        <>
            <h2>#{id}</h2>
            <ul>
            {issueLink.links.map(link => (
                <li>
                    <a href={link.url}>{link.title}</a>
                </li>
            ))}
            </ul>
            <hr />
        </>
    );
}

export default Issues;
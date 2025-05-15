import React from "react";

const issues = [
    {id:1,title:"Bug in Login", description:"error 404 on login ", status:"open"},
    {id:2,title:"UI issue on dashboard",description:"Misaligned elements",status:"closed"}
]

function IssueList(){
    return(
        <div>
            <h1>Issue Tracker</h1>
            <ul>
                {issues.map(issue=>(
                    <li key={issue.id}>
                        <h2>{issue.title}</h2>
                        <p>{issue.description}</p>
                        <p>{issue.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default IssueList;
import React from 'react';

export default function User({ details }){
    if(!details){
        return <h3>Working to fetch users details....</h3>
    }
    return(
        <div>
            <h2>{details.firstName}</h2>
            <h2>{details.lastName}</h2>
            <p>{details.email}</p>
        </div>
    )
}
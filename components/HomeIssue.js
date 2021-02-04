import React from 'react';
import Head from 'next/head';

export default function HomeIssue(props) {
    console.log(props);
    return (
        <div>
            <div className="w-3/4 h-12 border border-gray-500 flex justify-around items-center flex-row mx-auto my-1">
                <p className="mx-4">{props.info.bug.user}</p>
                <p className="mx-4">{props.info.bug.subject}</p>
                <p className="mx-4">{props.info.bug.bugDesc}</p>
                <p className="mx-4">{props.info.createdAt}</p>
                <p className="mx-4">{props.usedKey + 1}</p>
            </div>
        </div>
    )
}

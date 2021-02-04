import React from 'react';
import Head from 'next/head';

export default function HomeIssue(props) {
    console.log(props);
    return (
        <div>
            <div className="w-full h-12 border border-gray-500 flex justify-around items-center flex-row">
                <p className="mx-4">{props.info.bug.user}</p>
                <p className="mx-4">{props.info.bug.subject}</p>
                <p className="mx-4">{props.info.bug.bugDesc}</p>
                <p className="mx-4">{props.info.createdAt}</p>
            </div>
        </div>
    )
}

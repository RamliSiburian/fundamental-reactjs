import React from 'react'

// props using Dummy Data
export function DummyList(props) {
    return (
        <>
            {props.name}
            {props.title}
        </>
    );
}

// Props using Manual Data
export default function List(props) {
    return (
        <>
            {props.name}
            {props.title}
        </>
    );
}
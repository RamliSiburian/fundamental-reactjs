import React from 'react'

function List(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.data}</h4>
        </div>
    )
}

export default List;
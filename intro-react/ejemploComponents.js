import React, { Fragment, Componet } from 'react';


const A = () => {
    return (
        <h1>A</h1>
    )
}


const B = () => {
    return (
        <>
            <A />
            <h1>B</h1>
        </>
    )
}

class C extends Component {
    render() {
        return (
            <Fragment>
                <A />
                <B />
            </Fragment>
        )
    }
}
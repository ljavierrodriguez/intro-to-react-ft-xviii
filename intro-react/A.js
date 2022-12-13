import React from 'react';
import { B } from './B';

const A = () => {
    return (
        <>
        <h1>A</h1>
        <B titulo={"Hola Mundo"} autor={"Luis"} visible={true} /> {/* props: { titulo: 'Hola Mundo', autor: 'Luis', visible: true } */}
        </>
    )
}

export default A;
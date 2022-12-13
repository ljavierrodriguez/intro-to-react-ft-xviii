// modulejs
export const sumar = (a, b) => {
    return a + b;
}

export const restar = (a, b) => {
    return a - b;
}

const operacion = () => {
    return {
        sumar: sumar,
        restar: restar
    }
}

export default operacion;
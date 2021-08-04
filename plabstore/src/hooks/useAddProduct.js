import { useState } from 'react'

function useAddProduct() {
    const [disable, setDisable] = useState(false)
    const [indexes, setIndexes] = useState([])
    const [counter, setCounter] = useState(0)

    const submitProduct = (data) => {
        setDisable(true)
        console.log(data)
        
    }

    const addFoto = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    }

    const removeFoto = index => () => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    }

    return { submitProduct, addFoto, removeFoto, indexes, disable }
}

export default useAddProduct

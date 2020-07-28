import React, { useContext } from 'react'
import { Fname } from './App1'

const CClass = () => {
    const name  = useContext(Fname);
    return `Hi My name is ${name}`
}

export default CClass;
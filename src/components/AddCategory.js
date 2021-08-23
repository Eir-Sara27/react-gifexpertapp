import React, { useState } from 'react'//Para abreviar rafc no olvidar
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange=(e)=>{//InputValue con lo que se escribe en el cuadro de texto
        setinputValue(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();//Prevenir el comportamiento por defecto del formulario

        if (inputValue.trim().length>2){
            //Llamar a setCategories para que agregue los distintos inputValue
            setCategories(cats=>[ inputValue, ...cats]);
            setinputValue('');

        }
        

        //console.log('Submit hecho')

    }
//No es necesario utilizar el fragment si hay un elemento divisor como es el caso del form
    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
            
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}

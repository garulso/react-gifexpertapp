import React, { useState } from 'react';
import PropTypes from 'prop-types';

// se puede utilizar props y luego en la llamada usar props.setCategories
// comunmente se desestructuran los componentes del argumento
export const AddCategory = ({ setCategories }) => {
    // Estado 
    const [inputValue, setInputValue] = useState('');
    // Manejar el contenido del input
    const handleInputChange = (e) => {
        // obtener el valor del cuadro de texto 
        setInputValue(e.target.value);
    }
    // Manjear el enter dentro del input
    const handleSubmit = (e) => {
        // PAra prevenir el comportamiento del formulario
        e.preventDefault();
        // llamar a la funcion setCategories
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    //
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            >
            </input>
        </form>
    )
}
// Manejo de propiedades
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


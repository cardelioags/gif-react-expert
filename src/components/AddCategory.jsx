import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1) return;
        onNewCategory(newInputValue);
        setinputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar Gifts'
                value={inputValue}
                onChange={onInputChange}
            ></input>
        </form>
    )
}
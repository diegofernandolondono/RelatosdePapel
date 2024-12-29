import { useState } from 'react';

function useCustomHook(initialValue) {
    const [value, setValue] = useState(initialValue);

    const increment = (quantity = 1) => {
        setValue(value + quantity);   // Incrementa el contador por la cantidad especificada
    };

    const reset = () => {
        setValue(0); // Resetea el contador a 0 cuando se cierra la sesión
    };

    return { value, increment, reset };
}

export default useCustomHook;
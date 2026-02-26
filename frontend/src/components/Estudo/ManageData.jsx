import { useState } from 'react';
// Componente para demonstrar o uso de useState para gerenciar dados
function ManageData() {
    
    const [number, setNumber] = useState(10);
    //o useState é usado para criar uma variável de estado chamada "number" e uma função "setNumber" para atualizar seu valor. O valor inicial de "number" é definido como 10.
    
    return (
        <div>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(20)}>Mudar variavel</button>
            </div>
        </div>
    )
}

export default ManageData;
import {useState} from 'react'

function RenderizacaoCondicional() {
    const [x] = useState(false);
    // é possivel usar if/else para renderizar
    return (
        <div>
            <h1>Renderização Condicional</h1>
            { x ? (
                <div>
                    <p>O valor é verdadeiro</p>
                </div>
            ) : (
                <div>
                    <p>O valor é falso</p>
                </div>
            )}
        </div>
    )
}

export default RenderizacaoCondicional;
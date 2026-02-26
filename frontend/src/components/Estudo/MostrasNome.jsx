function MostrasNome(props) {
    //props é um objeto que contém as propriedades passadas para o componente
    return (
        <div>
            <h1>O nome é: {props.nome}</h1>
        </div>
    );
}

export default MostrasNome;
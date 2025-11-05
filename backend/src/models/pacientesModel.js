const connection = require('./connection');

async function getAllPacientes() {
    const [pacientes] = await connection.execute('SELECT * FROM pacientes');
    return pacientes;
};

async function createPacientes(paciente){
    
    
    const {
        nome, 
        data_nascimento, 
        fisioterapeuta_id, 
        data_avaliacao, 
        profissao, 
        contato, 
        objetivo_paciente, 
        frequencia, 
        enfase, 
        motivo_procura, 
        diagnostico_medico, 
        diagnostico_fisio,
        cirurgias,
        uso_medicamentos,
        doencas_existentes,
        nivel_atividade_fisica,
        cabeca,
        ombros,
        coluna,
        quadril,
        joelhos,
        pes,
        forca_muscular_global,
        flexibilidade,
        equilibrio,
        coordencao_motora,
        possui_dor,
        nivel_dor,
        tipo_respiracao,
        coordencao_movimento,
        objetivos} = paciente;
        

        const query = `INSERT INTO pacientes(
            nome, 
            data_nascimento, 
            fisioterapeuta_id, 
            data_avaliacao, 
            profissao, 
            contato, 
            objetivo_paciente, 
            frequencia, 
            enfase, 
            motivo_procura, 
            diagnostico_medico, 
            diagnostico_fisio,
            cirurgias,
            uso_medicamentos,
            doencas_existentes,
            nivel_atividade_fisica,
            cabeca,
            ombros,
            coluna,
            quadril,
            joelhos,
            pes,
            forca_muscular_global,
            flexibilidade,
            equilibrio,
            coordencao_motora,
            possui_dor,
            nivel_dor,
            tipo_respiracao,
            coordencao_movimento,
            objetivos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`;

            const [createdPaciente] = await connection.execute(query, [
            nome, 
            data_nascimento, 
            fisioterapeuta_id, 
            data_avaliacao, 
            profissao, 
            contato, 
            objetivo_paciente, 
            frequencia, 
            enfase, 
            motivo_procura, 
            diagnostico_medico, 
            diagnostico_fisio,
            cirurgias,
            uso_medicamentos,
            doencas_existentes,
            nivel_atividade_fisica,
            cabeca,
            ombros,
            coluna,
            quadril,
            joelhos,
            pes,
            forca_muscular_global,
            flexibilidade,
            equilibrio,
            coordencao_motora,
            possui_dor,
            nivel_dor,
            tipo_respiracao,
            coordencao_movimento,
            objetivos]);

            return createdPaciente;
}

module.exports = {
    getAllPacientes,
    createPacientes
};
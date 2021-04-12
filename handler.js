'use strict'
const pacientes = [
  { id: 1, nome: 'Maria', dataNascimento: '1984-11-01' },
  { id: 2, nome: 'Joao', dataNascimento: '1980-01-16' },
  { id: 3, nome: 'Jose', dataNascimento: '1998-06-06' }
]

module.exports.listarPacientes = async event => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        pacientes
      },
      null,
      2
    )
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

module.exports.obterPaciente = async (event) => {
  console.log(event);
  const {pacienteId} = event.pathParameters;

  const paciente = pacientes.find((paciente)=>paciente.id == pacienteId);

  if(paciente === undefined){
    return{
      statusCode: 404,
      body: JSON.stringify({
        erro:'Paciente não existe'}, null, 2)
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(paciente ,null,2)
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

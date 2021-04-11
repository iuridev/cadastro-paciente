'use strict';

const pacientes = [
  {id: 1, nome: "Maria", dataNasc: '1980-08-20'},
  {id: 2, nome: "Joao", dataNasc: '1994-06-15'},
  {id: 3, nome: "Jose", dataNasc: '1985-02-22'}
];

module.exports.listarPacientes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        pacientes
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

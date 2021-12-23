module.exports = {


  friendlyName: 'Create',


  description: 'Create board.',


  inputs: {
    boardName: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    }


  },

  exits: {
    success: {
      version: 'v1',
      status: true,
      statusCode: 200,
      details: 'OK',
      statusMessage: 'success',
      description: "Board was created successfuly",
    },
    operationalError: {
      version: 'v1',
      status: true,
      statusCode: 400,
      details: 'BAD REQUEST',
      statusMessage: 'error',
      description: 'The request was formed properly',
      errorCode: 'RESPONSE_STATUS_CODE_BAD_REQUEST',
    },
    

  },


  fn: async function (inputs, exits) {
    try{
      let newBoard = await Board.create({
        boardName: inputs.boardName,
        description: inputs.description
      }).fetch();

      return exits.success({
        version: 'v1',
        status: true,
        statusCode: 200,
        details: 'OK',
        statusMessage: 'success',
        description: 'A new board has been created',
        response: {
          message: `A new board with name ${newBoard.boardName} has beeen created successfully`,
        },
      })

    }
    catch(error){
      return exits.operationalError({
        version: 'v1',
        status: true,
        statusCode: 400,
        details: 'BAD REQUEST',
        statusMessage: 'error',
        description: 'The request was formed properly',
        response: {
          message: 'Oops :) an error occured',
          error: error.message,
        },
        errorCode: 'RESPONSE_STATUS_CODE_BAD_REQUEST',
      })

    }

  }


};

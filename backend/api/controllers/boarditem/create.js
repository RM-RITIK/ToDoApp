module.exports = {


  friendlyName: 'Create',


  description: 'Create boarditem.',


  inputs: {
    boardId: {
      type: 'number',
      required: true,
    },
    itemText: {
      type: 'string',
      required: true,
    },

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
    try {
      let newBoardItem = await Boarditem.create({
        boardId: inputs.boardId,
        itemText: inputs.itemText,
      }).fetch();

      return exits.success({
        version: 'v1',
        status: true,
        statusCode: 200,
        details: 'OK',
        statusMessage: 'success',
        description: 'A new boarditem has been added',
        response: {
          message: `A new boarditem was added to board with id: ${inputs.boardId}`,
        },
      })


    }
    catch (error){
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
      });

    }

  }


};

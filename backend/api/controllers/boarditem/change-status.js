module.exports = {


  friendlyName: 'Change status',


  description: '',


  inputs: {
    boardItemId: {
      type: 'number',
      required: true
    }

  },


  exits: {
    success: {
      version: 'v1',
      status: true,
      statusCode: 200,
      details: 'OK',
      statusMessage: 'success',
      description: "The status of the board item was changed successfully",
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
      const item = await Boarditem.findOne({id: inputs.boardItemId});
      if(item.isCompleted === false){
        await Boarditem.updateOne({id: inputs.boardItemId}).set({
          isCompleted: true
        });
      }
      else{
        await Boarditem.updateOne({id: inputs.boardItemId}).set({
          isCompleted: false
        });
      }

      return exits.success({
        version: 'v1',
        status: true,
        statusCode: 200,
        details: 'OK',
        statusMessage: 'success',
        description: 'The status of the board item was changed successfully',
        response: {
          message: `The request was successfully processed`,
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

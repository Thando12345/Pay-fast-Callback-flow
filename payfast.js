exports.post_payfastCallback = function(request, response) {
    // Handle the callback here
    console.log(request.body);
    // Send a 200 status code back to PayFast
    response.status(200).send('OK');
  }
  
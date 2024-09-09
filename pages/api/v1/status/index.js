function status(request, response) {
  response.status(200).json({
    msg: "Hello World",
  });
}

export default status;

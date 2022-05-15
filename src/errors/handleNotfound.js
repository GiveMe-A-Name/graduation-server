const { createFailResponse } = require("../const");

function handleNotFound(req, res, next) {
  res.json(createFailResponse(404, "not found"));
}

module.exports = handleNotFound;

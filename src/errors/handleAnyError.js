const { createFailResponse } = require("../const");

function handleAnyError(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;

  const errorCode = err.status || 500;
  // render the error page
  res.status(200);
  res.json(createFailResponse(errorCode, `发生错误： ${err.message}`));
}

module.exports = handleAnyError;

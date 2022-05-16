/**
 *
 * @param {Number} errcode
 * @param {String} errmsg
 */
function createFailResponse(errcode, errmsg) {
  return {
    errcode,
    errmsg,
  };
}

/**
 *
 * @param {*} data - response data
 */
function createSuccessResponse(data) {
  return {
    errcode: 0,
    errmsg: "",
    data,
  };
}

function jsonStringifyErr(e) {
  return createFailResponse(-10001, `发生错误: ${e.message}`);
}

module.exports = {
  createFailResponse,
  createSuccessResponse,
};

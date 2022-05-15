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

module.exports = {
  createFailResponse,
  createSuccessResponse,
};

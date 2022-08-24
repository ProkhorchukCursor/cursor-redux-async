const { listUsers, removeUser, addUser } = require("../repository/users");

const { HTTP_CODE } = require("../config/constants");

const getListUsers = async (_req, res, _next) => {
 const users = await listUsers();
 res.status(HTTP_CODE.OK).json({
  status: "success",
  code: HTTP_CODE.OK,
  data: { users },
  message: "router.get is OK",
 });
};

const saveUser = async (req, res, _next) => {
 const user = await addUser(req.body);
 res.status(HTTP_CODE.CREATED).json({
  status: "success",
  code: HTTP_CODE.CREATED,
  data: { user },
  message: `${user.name} added`,
 });
};

const deleteUser = async (req, res, _next) => {
 const { userId } = req.params;
 const remove = await removeUser(userId);

 if (remove === false) {
  res.status(HTTP_CODE.FORBIDDEN).json({
   status: "error",
   code: HTTP_CODE.FORBIDDEN,
   message: `${userId} not found`,
  });
 } else {
  res.json({ message: "router.delete is OK" });
 }
};

module.exports = {
 getListUsers,
 saveUser,
 deleteUser,
};

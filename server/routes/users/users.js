const express = require("express");
const router = express.Router();

const {
 getListUsers,
 saveUser,
 deleteUser,
} = require("../../controllers/users");

router.get("/", getListUsers);

router.post("/", saveUser);

router.delete("/:userId", deleteUser);

module.exports = router;

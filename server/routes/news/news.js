const express = require("express");
const router = express.Router();

const {
 getListNews,
 saveNews,
 deleteNews,
 changeNews,
} = require("../../controllers/news");

router.get("/", getListNews);

router.post("/", saveNews);

router.delete("/:newsId", deleteNews);

router.patch("/:newsId", changeNews);

module.exports = router;

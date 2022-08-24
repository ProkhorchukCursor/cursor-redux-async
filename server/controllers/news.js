const {
 listNews,
 removeNews,
 addNews,
 updateNews,
} = require("../repository/news");

const { HTTP_CODE } = require("../config/constants");

const getListNews = async (_req, res, _next) => {
 const news = await listNews();
 res.status(HTTP_CODE.OK).json({
  status: "success",
  code: HTTP_CODE.OK,
  data: { news },
  message: "router.get is OK",
 });
};

const saveNews = async (req, res, _next) => {
 const news = await addNews(req.body);
 res.status(HTTP_CODE.CREATED).json({
  status: "success",
  code: HTTP_CODE.CREATED,
  data: { news },
  message: `${news.title} added`,
 });
};

const deleteNews = async (req, res, _next) => {
 const { newsId } = req.params;
 const remove = await removeNews(newsId);

 if (remove === false) {
  res.status(HTTP_CODE.FORBIDDEN).json({
   status: "error",
   code: HTTP_CODE.FORBIDDEN,
   message: `${newsId} not found`,
  });
 } else {
  res.json({ message: "router.delete is OK" });
 }
};

const changeNews = async (req, res, _next) => {
 const news = await updateNews(req.params.newsId, req.body);

 if (news) {
  return res.status(HTTP_CODE.OK).json({
   status: "success",
   code: HTTP_CODE.OK,
   data: { news },
   message: `${news.title} updated`,
  });
 } else {
  return res.status(HTTP_CODE.FORBIDDEN).json({
   status: "error",
   code: HTTP_CODE.FORBIDDEN,
   message: "news not found",
  });
 }
};

module.exports = {
 getListNews,
 saveNews,
 deleteNews,
 changeNews,
};

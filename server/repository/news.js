const News = require("../models/news");

const listNews = async () => {
 return await News.find();
};

const removeNews = async (newsId) => {
 return News.findByIdAndRemove({ _id: newsId });
};

const addNews = async (body) => {
 return News.create(body);
};

const updateNews = async (newsId, body) => {
 return News.findOneAndUpdate({ _id: newsId }, { ...body }, { new: true });
};

module.exports = {
 listNews,
 removeNews,
 addNews,
 updateNews,
};

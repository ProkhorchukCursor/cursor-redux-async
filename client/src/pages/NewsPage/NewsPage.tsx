import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
 Box,
 Card,
 CardContent,
 CardHeader,
 CardMedia,
 Container,
 Divider,
 Typography,
} from "@mui/material";

import { getNews } from "../../redux/reducers/newsReducer";
import { setNews } from "../../redux/action-creators/newsActionCreator";

import { INews } from "../../types/INews";

const createDate = (value: number) => {
 return value > 10 ? value : `0${value}`;
};

const NewsPage = () => {
 const news: INews[] = useSelector(getNews);

 const dispatch: any = useDispatch();

 useEffect(() => {
  dispatch(setNews());
 }, [dispatch]);

 return (
  <Container>
   <Box>
    <Typography variant="h2" color="#348feb">
     News
    </Typography>
    <Divider />
    {news.length > 0 ? (
     <Box>
      {news.map((el) => (
       <Link
        key={el._id}
        to={`/news/${el._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
       >
        <Card sx={{ maxWidth: "600px", my: 2, mx: "auto" }}>
         <CardHeader
          title={el.title}
          subheader={`${createDate(new Date(el.created).getDay())}.${createDate(
           new Date(el.created).getMonth() + 1,
          )}.${createDate(new Date(el.created).getFullYear())}`}
         />
         <CardMedia
          component="img"
          height="200"
          image={el.image}
          alt={el.title}
         />
         <CardContent>
          <Typography>{el.content}</Typography>
         </CardContent>
        </Card>
       </Link>
      ))}
     </Box>
    ) : (
     <Typography variant="h5" sx={{ mt: 2 }}>
      No news
     </Typography>
    )}
   </Box>
  </Container>
 );
};

export default NewsPage;

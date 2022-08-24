import { Route, HashRouter, Routes } from "react-router-dom";

import { Container } from "@mui/material";

import {
 AddNewsPage,
 AddUserPage,
 ContactsPage,
 ContactUserPage,
 HomePage,
 NewsPage,
 PhotosPage,
 PostsPage,
 UsersPage,
} from "./pages";

import { Header } from "./components";

function App() {
 return (
  <Container>
   <HashRouter>
    <Header />
    <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/posts" element={<PostsPage />} />
     <Route path="/photos" element={<PhotosPage />} />
     <Route path="/contacts" element={<ContactsPage />} />
     <Route path="/contacts/:id" element={<ContactUserPage />} />
     <Route path="/users" element={<UsersPage />} />
     <Route path="/addUser" element={<AddUserPage />} />
     <Route path="/news" element={<NewsPage />} />
     <Route path="/news/:newsId" element={<AddNewsPage />} />
     <Route path="/addNews" element={<AddNewsPage />} />
    </Routes>
   </HashRouter>
  </Container>
 );
}

export default App;

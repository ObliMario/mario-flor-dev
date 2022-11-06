import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";

function App() {

  return (
    <HashRouter>
      
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />}>
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found </p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

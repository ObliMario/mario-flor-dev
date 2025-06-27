import "./Style.css";
import "./StyleMedia.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";

// 🔁 Importa el selector de idioma
import LanguageSwitcher from "./LanguageSwitcher";

// 🔁 Asegúrate de importar i18n config
import "./i18n";

function App() {
  return (
    <HashRouter>
      <LanguageSwitcher /> {/* 🌐 Mostrar siempre el selector */}
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />}>
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import {
  Routes,
  Route
} from "react-router-dom";



import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Guides from "./pages/Guides";
import GuidePage from "./pages/GuidePage";
import Notes from "./pages/Notes";
import NotePage from "./pages/NotePage";
import Work from "./pages/Work";


const App = () => {

  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />}/>

        <Route path="/work" element={<Work/>} />

        <Route path="/notes" element={<Notes/>}/>
        <Route path="/notes/:slug" element={<NotePage />} />

        <Route path="/guides" element={<Guides/>} />
        <Route path="/guides/:slug" element={<GuidePage />} />

      </Route>

    </Routes>
  );
};


export default App;
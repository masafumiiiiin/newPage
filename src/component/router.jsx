import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogInP from "./Login";
import NewCountP from "./Newcount";
import Scene1 from "./float-mini-Page";
import Scene2 from "./desert-mini-Page";
import EditName from "./EditName1";
import EditPhoto from "./EditPhoto";
import EditContent from "./EditContent";
import SelectForm from "./ChooseToSave1";

const Nav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInP />} />
        <Route path="/LogIn" element={<LogInP />} />
        <Route path="/NewCount" element={<NewCountP />} />
        <Route path="/Scene1" element={<Scene1 />} />
        <Route path="/Scene2" element={<Scene2 />} />
        <Route path="/EditName" exact element={<EditName />} />
        <Route path="/EditPhoto" exact element={<EditPhoto />} />
        <Route path="/EditContent" exact element={<EditContent />} />
        <Route path="/SelectForm" exact element={<SelectForm />} />
      </Routes>
    </Router>
  );
};

export default Nav;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AddItems, ViewItems } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItems />} />
        <Route path="/view" element={<ViewItems />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

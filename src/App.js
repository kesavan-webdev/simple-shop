import Navbar from "./component/navbar/navbar.component";
import HomePage from "./routes/homepage";
import ShopPage from "./routes/shoppage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

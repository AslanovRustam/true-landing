import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Gambling from "./pages/Gambling";
import Data from "./pages/Data";
import Tax from "./pages/Tax";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tax-collection" element={<Tax />} />
        <Route path="/gambling" element={<Gambling />} />
        <Route path="/data" element={<Data />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;

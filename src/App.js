import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/result";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box sx={{ padding: "3%" }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="result/:searchString/:type" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages";
import ChatsPage from "./pages/chats";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

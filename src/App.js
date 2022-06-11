import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login";
import QRcode from "./pages/QRcode";

function App() {
  const [username, setUsername] = useState("");
  return (
    <Routes>
      <Route path="/" element={<SignIn setUsername={setUsername} />} />
      <Route path="qr-code" element={<QRcode username={username} />} />
    </Routes>
  );
}

export default App;

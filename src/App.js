import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CharacterEditor style={{ zIndex: 2 }} />
      <div
        style={{
          backgroundColor: "HSL(189, 19%, 85%)",
          height: "40vh",
          width: "100%",
          position: "fixed",
          bottom: 0,
          zIndex: -1,
        }}
      ></div>
      <Footer style={{ zIndex: 2 }} />
    </>
  );
}

export default App;

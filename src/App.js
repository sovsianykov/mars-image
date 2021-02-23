import React, {useEffect} from "react";
import Mosaic from "./components/Mosaic";


import MyGallery from "./components/Gallery";

function App() {








  return (
    <div className="App container-fluid">
      <h1>Yesterday's Mars Photos </h1>
        <Mosaic/>
      <MyGallery/>
    </div>
  );
}

export default App;

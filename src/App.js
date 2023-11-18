import logo from "./logo.svg";
import "./App.css";
import BasicTextFields from "./components/BasicTextFields";
import BasicSelect from "./components/BasicSelect";
import Button from "./components/Button";
import Login from "./containers/Login";

import React, { useState } from "react";

function App() {
   const [data, setData] = useState(null);

   return (
      <div className="App">
         <header className="App-header">
            {/* <div class="zoom-in-out-box"></div> */}
            {/* <div className="App-logo-spin"> sdfjskdjflskdjf</div> */}
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
               }}
            >
               <img src={logo} className="App-logo-spin" alt="logo" />
               <Login setData={setData}></Login>
            </div>

            {data && <p style={{ color: "black" }}>
               Token Result:
               <div
                  style={{
                     fontSize: 12,
                     border: "1px solid lightgray",
                     padding: 12,
                     width: 300,
                     wordWrap: "break-word",
                     backgroundColor: "#F4F4F4",
                  }}
               >
                  {data}
               </div>
            </p>}
         </header>
      </div>
   );
}

export default App;

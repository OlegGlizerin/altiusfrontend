import Box from "@mui/material/Box";
import BasicTextFields from "../components/BasicTextFields";
import BasicSelect from "../components/BasicSelect";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";

const Login = (props) => {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [website, setWebsite] = useState("");

   const [error, setError] = useState("");

   const [disabledButton, setDisabledButton] = useState(true);

   const onChangeUserName = (event) => {
      setUserName(event.target.value);
   };

   const onChangePassword = (event) => {
      setPassword(event.target.value);
   };

   const onChangeWebsite = (event) => {
      setWebsite(event.target.value);
      console.log("finish set website", event.target.value);
   };

   const validateButton = (isInitial) => {
      console.log("oleg", !userName, !password, !website, "website", website);

      if (isInitial) {
         setError("");
         return;
      }
      if (!userName || !password || !website) {
         setError("Please fill all fields.");
         setDisabledButton(true);
         return;
      }
      setDisabledButton(false);
      setError("");
   };

   const handleClick = async () => {
      const requestOptions = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            userName: userName,
            password: password,
            website: website,
         }),
      };
      fetch("http://127.0.0.1:8000/api/login", requestOptions)
         .then((response) => response.json())
         .then((json) => {
            // console.log("token", json);
            if (json.error) {
               setError(json.error.errors.login);
               props.setData("");
            } else {
               props.setData(json.token);
            }
            return json;
         })
         .catch((error) => {
            console.log("error", error);
            setError(error);
            props.setData("");
         });
   };

   // console.log("username", userName, "password", password);
   // console.log("error", error);

   useEffect(() => {
      let isInitial = !userName && !password && !website;

      validateButton(isInitial);
   }, [website, userName, password]);

   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": { m: 0, width: "25ch" },
            backgroundColor: "white",
            padding: 5,
            
         }}
         noValidate
         autoComplete="off"
      >
         <BasicTextFields
            label="Email"
            onChange={(event) => {
               onChangeUserName(event);
            }}
            value={userName}
         ></BasicTextFields>
         <BasicTextFields
            label="Password"
            onChange={(event) => {
               onChangePassword(event);
            }}
            value={password}
         ></BasicTextFields>
         <BasicSelect
            label="Website"
            onChange={(event) => {
               onChangeWebsite(event);
            }}
            value={website}
         ></BasicSelect>
         <Button
            disabled={disabledButton}
            text="Submit"
            onClick={() => {
               validateButton();
               handleClick();
            }}
         ></Button>

         {error && (
            <p
               style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "red",
                  fontSize: 18,
               }}
            >
               {error}
            </p>
         )}
      </Box>
   );
};

export default Login;

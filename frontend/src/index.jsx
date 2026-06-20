import React from "react";
import ReactDOM from "react-dom/client"
import Product from "./Product";
import "./index.css";

const App = () => {
    return <>
    <Product />
    </>
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App />) 
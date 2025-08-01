import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import React from 'react'
window.React = React

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<App/>)
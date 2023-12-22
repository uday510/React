import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "../src/index.css";
import "../src/components/Header/Header.css"

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App/>);

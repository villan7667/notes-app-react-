import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"

const rootEl = document.getElementById("root")
const root = createRoot(rootEl)
root.render(<App />)

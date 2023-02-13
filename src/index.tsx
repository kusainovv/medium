import React from "react"
import ReactDOM from "react-dom/client"
import { rootDocument } from "./app/environment/system_features/rootDocument"
import { App } from "./app/app"

import "./index.css"
import "./app/features/translate/i18n.ts"

const root = ReactDOM.createRoot(rootDocument.getRoot())
root.render(<App />)

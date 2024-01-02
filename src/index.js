import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/theme";
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
  rootElement
);
// serviceWorkerRegistration.register();
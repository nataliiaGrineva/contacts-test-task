import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { RouterLayout } from "./routerLayout/RouterLayout";
import { HOME_ROUTE } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router basename={HOME_ROUTE}>
          <RouterLayout />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

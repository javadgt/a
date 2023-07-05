import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Header from "./components/ui/Header";
import { theme } from "./components/ui/theme";
import "./App.css";
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";


//NOTE Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی یونس قربانی</title>
          </Helmet>
          {/* <Header /> */}
          <Navbar/>
          <Sidebar/>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;

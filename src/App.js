import { Stack, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import Add from "./components/Add";
import { Feed } from "./components/Feed";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import theme from "./theme/theme";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Stack direction="row" spacing={0} justifyContent="space-between">
        <Add />

        <Sidebar theme={theme} />
        <Feed theme={theme} />
        <Rightbar theme={theme} />
      </Stack>
    </Fragment>
  );
}

export default App;

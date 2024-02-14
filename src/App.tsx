import React from 'react';
import Rechart from "./components/Rechart";
import {Grid} from "@mui/material";
import Navbar from "./components/Navbar";
import RechartBar from "./components/RechartBar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          xs=4
        </Grid>
        <Grid item xs={9}>
          <Grid

          >
            <Rechart/>
            <RechartBar/>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

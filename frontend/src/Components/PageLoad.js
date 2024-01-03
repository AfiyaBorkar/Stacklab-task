import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function PageLoad() {
  // const [pageLoaded, setPageLoaded] = useState(false);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setPageLoaded(true);
  //   };

  //   window.onload = handleLoad;

  //   return () => {
  //     window.onload = null;
  //   };
  // }, []);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div>
        {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
          <h2>Please wait, Profile is creating...</h2>
        </Backdrop>
      </div>
    </>
  );
}

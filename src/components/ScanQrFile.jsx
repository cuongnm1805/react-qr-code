import { Button, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useRef, useState } from "react";
import QrReader from "react-qr-reader";

const ScanQrFile = () => {
  const classes = useStyles();
  const [scanResultFile, setScanResultFile] = useState("");
  const qrRef = useRef(null);

  const handleErrorFile = (error) => {
    console.log(error);
  };

  const handleScanFile = (result) => {
    if (!result) return;
    setScanResultFile(result);
  };

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  };

  return (
    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
      <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>
        Scan Qr Code
      </Button>
      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: "100%" }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
      <h3>Scanned Code: {scanResultFile}</h3>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 10,
  },
}));
export default ScanQrFile;

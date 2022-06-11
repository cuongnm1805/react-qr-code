import { Card, CardContent, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import GenerateQr from "../components/GenerateQr";
import ScanQrFile from "../components/ScanQrFile";
import ScanQrImage from "../components/ScanQrImage";
import { useNavigate } from "react-router-dom";

const QRcode = ({ username }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    if (!username) return navigate("/");
  }, [navigate, username]);
  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}> Generator Download & Scan QR Code</h2>
        <CardContent>
          <Grid container spacing={2} justifyContent="center" style={{ minHeight: "100vh" }}>
            <GenerateQr />
            <ScanQrFile />
            <ScanQrImage />
          </Grid>
        </CardContent>
      </Card>
    </Container>
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
export default QRcode;

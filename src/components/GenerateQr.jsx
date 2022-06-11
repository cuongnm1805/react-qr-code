import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import QRCode from "qrcode";
import React, { useState } from "react";

const GenerateQr = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      if (!text) return;
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)} />
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={() => generateQrCode()}
        >
          Generate
        </Button>
        {imageUrl && (
          <a href={imageUrl} download>
            <img src={imageUrl} alt="" />
          </a>
        )}
      </Grid>
    </>
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
export default GenerateQr;

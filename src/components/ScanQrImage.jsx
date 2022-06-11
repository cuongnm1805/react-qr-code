import { Button, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import QrReader from "react-qr-reader";
const ScanQrImage = () => {
  const classes = useStyles();

  const [scanResultCamera, setScanResultCamera] = useState("");
  const [openScan, setOpenScan] = useState(false);
  const [info, setInfo] = useState({});
  const [scanFailed, setScanFailed] = useState(false);
  const [checkInResult, setCheckInResult] = useState({
    isCheckIn: false,
    message: "",
  });
  const [error, setError] = useState({
    isError: false,
  });

  const handleErrorCamera = (error) => {
    console.log(error);
  };
  const handleScanCamera = (result) => {
    if (!result) return;
    setScanResultCamera(result);
  };

  const handleShowCamera = () => {
    setScanResultCamera("");
    setOpenScan(!openScan);
    setScanFailed(false);
    setCheckInResult({
      isCheckIn: false,
      message: "",
    });
  };

  const validate = (value) => {
    if (!value) {
      setError({
        isError: true,
      });
      return false;
    }
    return true;
  };
  const handleSubmitForm = () => {
    console.log(info);
    const checkValidate = validate(info.numberIn);
    if (checkValidate) {
      console.log("call api success");
      setError({
        isError: false,
      });
      setInfo({});
      setCheckInResult({
        isCheckIn: true,
        message: "Check in Success",
      });
    }
  };

  useEffect(() => {
    if (!scanResultCamera) return;
    setOpenScan(false);
    setInfo({
      firstname: "Cuong",
      lastName: "Nguyen",
      email: "cuongnm48@gmail.com",
      numberIn: "",
    });
    // setScanFailed(true);
  }, [scanResultCamera]);

  return (
    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
      <Button
        variant="contained"
        className={classes.btn}
        color="primary"
        onClick={handleShowCamera}
        fullWidth
        style={{ marginBottom: "30px" }}
      >
        Scan
      </Button>

      {openScan && (
        <>
          <QrReader
            scanDelay={300}
            style={{ width: "100%" }}
            onError={handleErrorCamera}
            onScan={handleScanCamera}
          />
        </>
      )}
      {info?.firstname && (
        <div>
          <h3>Lastname: {info.lastName}</h3>
          <h3>Firstname: {info.firstname}</h3>
          <h3>Email: {info.email}</h3>
          <TextField
            fullWidth
            type="number"
            InputProps={{
              inputProps: {
                min: 1,
              },
              shrink: "true",
            }}
            label="Number In"
            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            onChange={(e) =>
              setInfo((prev) => {
                console.log(e.target.value);
                return {
                  ...prev,
                  numberIn: e.target.value,
                };
              })
            }
            defaultValue={info.numberIn}
          />
          {error.isError && !info.numberIn && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <Button
            variant="contained"
            className={classes.btn}
            color="primary"
            onClick={handleSubmitForm}
            fullWidth
            style={{ marginTop: "30px" }}
          >
            Submit
          </Button>
        </div>
      )}
      {scanFailed && (
        <div>
          <h3>Scan failed or user not found</h3>
        </div>
      )}

      {checkInResult.isCheckIn && (
        <div>
          <h3>{checkInResult.message}</h3>
        </div>
      )}
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
    margin: 30,
  },
}));
export default ScanQrImage;

import React, { useEffect, useState } from "react";
import { useGetFavoritedListings } from "../hooks";
import Spinner from "./Spinner";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "./Card";

const Landing = () => {
  const { favoritedListings, errorMessage, loading, error, status } =
    useGetFavoritedListings();

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleShowSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (error) {
      handleShowSnackbar();
    }
    return () => {
      handleCloseSnackbar();
    };
  }, [error]);

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Paper
        sx={{
          height: "500px",
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(public/images/compass-home-img.jpeg)`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Find your place
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                COMPASS
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* <ul>
        {favoritedListings.length
          ? favoritedListings.map((listing) => (
              <li key={listing.id}>
                <Link to={`saved-listings/${listing.id}`}>
                  {listing.address}
                </Link>
              </li>
            ))
          : null}
      </ul> */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {favoritedListings.length
          ? favoritedListings.map((listing) => (
              <Grid item xs={2} sm={4} md={4} key={listing.id}>
                <Card data={listing} />
              </Grid>
            ))
          : null}
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message={"Error fetching listing"}
        action={action}
      />
    </div>
  );
};

export default Landing;

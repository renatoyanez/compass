import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CustomCard = (props) => {
  const { data } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.city}
        </Typography>
        <Typography variant="h5" component="div">
          {data.address}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data.price}
        </Typography>
        <Typography variant="body2">
          {data.state}
          <br />
          {data.zipCode}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`saved-listings/${data.id}`}>Learn more</Link>
      </CardActions>
    </Card>
  );
};

export default CustomCard;

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { IProduct } from "../interfaces/product";

export const ProductCard = (productProps: IProduct) => {
  const { name, price, averageRating, image } = productProps;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 200 }} image={image} title={name} />
      <CardContent>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 4, md: 4 }}
        >
          <Grid item xs={2} sm={2} md={2}>
            <Typography fontWeight={800} variant="body1" color="text.primary">
              Price:
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography variant="body1" color="text.secondary">
              $ {price}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography fontWeight={800} variant="body1" color="text.primary">
              Rating:
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Typography variant="body1" color="text.secondary">
              {averageRating / 2}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          fullWidth
          style={{ textTransform: "none" }}
        >
          Purchase
        </Button>
      </CardActions>
    </Card>
  );
};

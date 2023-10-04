import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const FilterSection = () => {
  return (
    <Grid
      container
      spacing={{ xs: 1, md: 1 }}
      columns={{ xs: 4, sm: 4, md: 4 }}
    >
      <Grid item xs={4} sm={4} md={4}>
        <Typography variant="body1" color="text.secondary">
          <StarDisplayer power={averageRating / 2} />
        </Typography>
      </Grid>
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
    </Grid>
  );
};

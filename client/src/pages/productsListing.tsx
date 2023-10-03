import React, { useState, useEffect } from "react";
import { getAllProducts } from "../apiCalls/products/getProducts";
import { ProductCard } from "../components/productsCard";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

export const ProductListingPage = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProductsData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {productsData.length === 0 && (
        <>
          {Array(100)
            .fill(0)
            .map((_) => (
              <div>
                <LinearProgress color="success" />
                <br />
              </div>
            ))}
        </>
      )}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 3, sm: 12, md: 24 }}
      >
        {productsData.map((product: any, index: number) => (
          <Grid item xs={4} sm={3} md={4} key={index}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

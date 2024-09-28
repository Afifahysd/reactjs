import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Gambar3 from "./Gambar3.jpg";
import Gambar4 from "./Gambar4.jpg";
import Gambar5 from "./Gambar5.jpg";

function Produk() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Lipstik Make Over",
      price: "Rp. 200.000",
      stock: 100,
      image: Gambar3,
    },
    {
      name: "Cushion Instaperfect",
      price: "Rp. 280.000",
      stock: 50,
      image: Gambar4,
    },
    {
      name: "Bedak Padat Make Over",
      price: "Rp. 300.000",
      stock: 30,
      image: Gambar5,
    },
  ];

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Container sx={{ flex: 1, marginBottom: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Halaman Produk
      </Typography>
      <Typography variant="body1">
        ini adalah halam produk. di sini anda dapat menemukan berbagai produk
        yang kami tawarkan.
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ marginTop: "20px", boxShadow: "5%" }}
      >
        Produk Kami
      </Typography>
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={`Produk ${product.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Deskripsi produk {product.name}. ini adalah produk berkualitas
                  tinggi dengan fitur terbaik.
                </Typography>
              </CardContent>
              <Button
                size="small"
                variant="contained"
                color="primary"
                sx={{ m: 2 }}
              >
                Beli Sekarang
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleClickOpen(product)}
              >
                Detail
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Detail Produk</DialogTitle>
        {selectedProduct && (
          <DialogContent>
            <DialogContentText>
              <b>Nama Produk:</b> {selectedProduct.name} <br />
              <b>Harga:</b> {selectedProduct.price} <br />
              <b>Stok:</b> {selectedProduct.stock} <br />
            </DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Produk;

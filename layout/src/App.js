import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import Produk from "./Produk";
import Tentang from "./Tentang";
import Register from "./Register";
import logo from "./logo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Gambar1 from "./Gambar1.jpg";
import Gambar2 from "./Gambar2.jpg";
import Gambar3 from "./Gambar3.jpg";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

// import Gambar4 from './gambar4.jpg';

function Layout() {
  // Pengaturan Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "#4c82af" }}
        color="secondary"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="logos"
              style={{ height: "60px", width: "60px", marginRight: "16px" }}
            />
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            startIcon={<HomeIcon />}
          >
            Beranda
          </Button>
          <Button
            component={RouterLink}
            to="/produk"
            color="inherit"
            startIcon={<StoreIcon />}
          >
            Produk
          </Button>
          <Button
            component={RouterLink}
            to="/tentang"
            color="inherit"
            startIcon={<InfoIcon />}
          >
            Tentang
          </Button>
          <Button
            component={RouterLink}
            to="/Register"
            color="inherit"
            startIcon={<AssignmentIndIcon />}
          >
            Register
          </Button>
        </Toolbar>
      </AppBar>

      {/* Jumbotron dengan gambar slide */}
      <Slider {...settings}>
        <div>
          <img
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src={Gambar1}
            alt="Slider 1"
          />
        </div>
        <div>
          <img
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
            src={Gambar2}
            alt="Slider 2"
          />
        </div>
      </Slider>

      <Container sx={{ flex: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                  SELAMAT DATANG DI WEBSITE KAMI
                </Typography>
                <Typography variant="h4" gutterBottom align="center">
                  Produk Terlaris
                </Typography>

                {/* Menampilkan Produk Sejajar ke Samping */}
                <Grid container spacing={4}>
                  {/* produk pertama */}
                  <Grid item xs={12} md={4}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={Gambar3} //Path ke gambar lokal
                        alt="Produk A"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Produk A
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Deskripsi produk A. ini adalah produk berkualitas
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
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            }
          />
          <Route path="/produk" element={<Produk />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>

      <Box
        component="footer"
        sx={{ backgroundColor: "#4c82af", color: "#fff", py: 3, mt: "20px" }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Alamat
              </Typography>
              <Typography variant="body2">
                jl. contoh no. 123 <br /> kota, negara12345 <br /> telepon:
                (123)456789
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Find on Us
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Layout;

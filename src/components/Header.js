import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #0A2647 0%, #144272 100%)",
        marginBottom: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "1.2rem 0",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AccountBalanceIcon
              sx={{
                fontSize: 40,
                color: "#FFD700",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
              }}
            />
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "1px",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                  fontSize: { xs: "1.5rem", md: "2rem" },
                }}
              >
                BODRUM NÜFUS
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#FFD700",
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "2px",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                Nüfus Bilgi Sistemi
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 500,
                opacity: 0.9,
                "&:hover": {
                  opacity: 1,
                  cursor: "pointer",
                },
              }}
            >
              Ana Sayfa
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: 500,
                opacity: 0.9,
                "&:hover": {
                  opacity: 1,
                  cursor: "pointer",
                },
              }}
            >
              İletişim
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

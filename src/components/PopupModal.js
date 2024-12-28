import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function PopupModal({ open, handleClose, data }) {
  if (!data) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          backgroundColor: "#0A2647",
          color: "white",
        }}
      >
        <Typography variant="h6">{data.ProductName}</Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Box sx={{ flex: "1 1 300px" }}>
            <img
              src={data.ImageUrl || "https://via.placeholder.com/400x300"}
              alt={data.ProductName}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
          <Box sx={{ flex: "1 1 300px" }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#0A2647", fontWeight: "bold" }}
            >
              Detaylar
            </Typography>
            <Box sx={{ display: "grid", gap: 2 }}>
              {Object.entries(data).map(
                ([key, value]) =>
                  key !== "ImageUrl" && (
                    <Box key={key} sx={{ display: "flex", gap: 2 }}>
                      <Typography sx={{ fontWeight: "bold", color: "#666" }}>
                        {key}:
                      </Typography>
                      <Typography>{value}</Typography>
                    </Box>
                  )
              )}
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default PopupModal;

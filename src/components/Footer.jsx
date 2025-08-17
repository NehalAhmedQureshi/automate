import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
        <Box
          sx={{
            bgcolor: "grey.900",
            color: "white",
            textAlign: "center",
            py: 2,
            mt:2,
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Automation with n8n, Make.com, Zapier, and other no-code tools.
          </Typography>
        </Box>  )
}

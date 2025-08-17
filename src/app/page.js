import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { SettingsSuggest, FlashOn, Link, Timeline } from "@mui/icons-material";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Navbar />

      <Box mt={4}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            py: 10,
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h3" fontWeight="bold">
              Automate Your Workflows with n8n
            </Typography>
            <Typography variant="h6" sx={{ mt: 2, mb: 4 }}>
              Save time, reduce errors, and scale faster with custom
              automations.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{ bgcolor: "white", color: "primary.main" }}
            >
              Book a Free Demo
            </Button>
          </Container>
        </Box>

        {/* About Section */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            What We Do
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              { icon: <FlashOn fontSize="large" />, title: "Custom Workflows" },
              {
                icon: <Link fontSize="large" />,
                title: "App & API Integrations",
              },
              {
                icon: <SettingsSuggest fontSize="large" />,
                title: "AI + Automation",
              },
              {
                icon: <Timeline fontSize="large" />,
                title: "Business Efficiency",
              },
            ].map((service, idx) => (
              <Grid item xs={12} md={3} key={idx}>
                <Card sx={{ textAlign: "center", p: 2, height: "100%" }}>
                  <CardContent>
                    {service.icon}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {service.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Services Section */}
        <Box sx={{ bgcolor: "grey.100", py: 8 }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Our Automation Solutions
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                "CRM Automation",
                "Marketing Automation",
                "Operations Automation",
                "Custom API Integrations",
              ].map((item, idx) => (
                <Grid item xs={12} md={3} key={idx}>
                  <Card sx={{ p: 2, textAlign: "center", height: "100%" }}>
                    <CardContent>
                      <Typography variant="h6">{item}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* How It Works */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            How It Works
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              "Tell us your process",
              "We design your workflow",
              "You save time & money",
            ].map((step, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{ textAlign: "center", p: 3, height: "100%" }}>
                  <CardContent>
                    <Typography variant="h4">{idx + 1}</Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {step}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CTA Section */}
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            textAlign: "center",
            py: 8,
            mt: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Ready to Automate Your Business?
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: "white", color: "primary.main", mt: 2 }}
          >
            Schedule Free Consultation
          </Button>
        </Box>

        
      </Box>
    </Container>
  );
}

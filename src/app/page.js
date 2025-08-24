"use client";
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
  Stack,
} from "@mui/material";
import { SettingsSuggest, FlashOn, Link, Timeline } from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import MainHeading from "@/components/MainHeading";
import Lottie from "lottie-react";
import { animatedRobot } from "@/assets";
import { useEffect, useRef } from "react";
import TextType from "@/reactBitsComponents/TextType/TextType";
import ShinyText from "@/reactBitsComponents/ShinyText/ShinyText";

export default function Home() {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); // 0.5x speed
    }
  }, []);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Box mt={4}>
        {/* Hero Section */}
        <Box
          sx={{
            borderRadius: 6,
            height: "85vh",
            // bgcolor:'red'
          }}
        >
          <Container maxWidth="lg">
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack
                width={"50%"}
                alignItems={"flex-start"}
                justifyContent={"center"}
                gap={3}
              >
                <Typography variant="h3" lineHeight={1.5} fontWeight={550}>
                  <TextType
                    text={[
                      "Automate Turns Every Lead Into Connection",
                      "Automate Turns Every Lead Into Connection",
                      "Automate Turns Every Lead Into Connection",
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="_"
                  />
                </Typography>
                {/* <Typography variant="h6" sx={{ mt: 2, mb: 4 }} color="grey">
                  Our mission is to save you time, reduce errors, and boost
                  efficiency through smart automation.
                </Typography> */}
                <ShinyText
                  text={
                    "Our mission is to save you time, reduce errors, and boost efficiency through smart automation."
                  }
                />
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    bgcolor: "white",
                    color: "#1976d2",
                    borderRadius: "25px",
                  }}
                >
                  Book a Free Demo
                </Button>
              </Stack>
              <Stack>
                <Lottie
                  animationData={animatedRobot}
                  lottieRef={lottieRef}
                  loop
                  autoplay
                  style={{ width: 500, height: 500 }}
                />
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* About Section */}
        <Container sx={{ py: 3 }}>
          {/* <Typography variant="h4" fontWeight={'bold'} align="center" gutterBottom>
            <span style={{ color: "#1976d2" }}>What</span> We Do
          </Typography> */}
          <MainHeading
            variant={"h3"}
            text={"What We Do"}
            fontWeight={"bold"}
            align="center"
            gutterBottom
          />
          <Grid container spacing={4} sx={{ mt: 8 }}>
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
        {/* <Box sx={{ bgcolor: "grey.100", py: 8 }}>
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
        </Box> */}

        {/* How It Works */}
        {/* <Container sx={{ py: 8 }}>
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
        </Container> */}

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

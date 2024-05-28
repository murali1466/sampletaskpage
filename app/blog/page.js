import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const services = [
  {
    logo: "/icon-1.jpg",
    title: "Transport Consultancy",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    logo: "/icon-2.png",
    title: "Vertical & Horizontal Transportation Systems Consultant",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    logo: "/icon-3.png",
    title: "Business opportunities",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    logo: "/icon-4.png",
    title: "International and non- profit",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
];

const works = [
    {
      logo: "/Box Icon (1).jpg",
      title: "Warehousing Services",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking.",
    },
    {
      logo: "/Sheild Icon.png",
      title: "Safety & Quality",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking.",
    },
    {
      logo: "/Environment Icon.png",
      title: "Care for Environment",
      description:
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking.",
    }
  ];
export default function BlogPage() {
  return (
    <>
      <Box sx={{ background: "#fff", py: "50px" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: "Amiko",
                  fontWeight: "600",
                  fontSize: "64px",
                  color: "#000000",
                  lineHeight: "74px",
                }}
              >
                We build bridges between{" "}
                <Typography
                  sx={{
                    color: "#787878",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                  }}
                  variant="span"
                >
                  companies and customers
                </Typography>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", alignItems: "end" }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  fontFamily: "Amiko",
                  color: "#292C3F",
                  lineHeight: "28px",
                }}
              >
                Upgrade your city's mobility experience with Better Mobility's
                innovative solutions. Embrace the future of transportation
                today.Empowering Cities, Transforming Journeys
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: "20px" }}>
            <img
              src="/people.png"
              alt="people"
              width={"100%"}
              height={"960.67px"}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ mt: "20px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "94px",
                  background: "#E8E8E880",
                  borderLeft: "4px solid #FFDA56",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    color: "#1C1F35",
                    fontWeight: "400",
                    fontSize: "14px",
                    px: "4px",
                    py: "9px",
                  }}
                >
                  What We DO
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontSize: "35px",
                  fontWeight: "600",
                  color: "#1C1F35",
                  lineHeight: "41.48px",
                  marginTop: "10px",
                }}
              >
                Our Services
              </Typography>
            </Box>
            <Grid
              container
              spacing={"30px"}
              mt={"20px"}
              sx={{ px: { md: "50px" } }}
            >
              {services.map((item, index) => (
                <React.Fragment key={index}>
                  {" "}
                  <Grid
                    item
                    sx={{ display: "flex", gap: "20px" }}
                    xs={12}
                    md={6}
                  >
                    <Box>
                      <img
                        src={item.logo}
                        alt={item.title}
                        width={"60px"}
                        height={"60px"}
                      />
                    </Box>
                    <Box>
                      <Divider
                        orientation="vertical"
                        sx={{ border: "1px solid #D8D8D8" }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Rubik",
                          fontSize: "25px",
                          fontWeight: "400",
                          lineHeight: "29.63px",
                          color: "#1C1F35",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontfamily: "Krub",
                          fontSize: "16px",
                          fontWeight: "500",
                          lineHeight: "24.24px",
                          textAlign: "left",
                          color: "#666C89",
                          marginTop: "10px",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
            <Box sx={{ mt: "40px", display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  background: "#091242",
                  width: "194px",
                  height: "60px",
                  color: "#fff",
                  fontFamily: "Krub",
                  "&:hover": {
                    background: "#091242",
                  },
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "21.6px",
                }}
              >
                More Works
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: "20px", background: "#F4F4F4" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "105px",
                  background: "#E8E8E880",
                  borderLeft: "4px solid #1C1F35",
                  mt: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Rubik",
                    color: "#1C1F35",
                    fontWeight: "400",
                    fontSize: "14px",
                    px: "4px",
                    py: "9px",
                  }}
                >
                  Our Goodness
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Rubik",
                  fontSize: "35px",
                  fontWeight: "600",
                  color: "#1C1F35",
                  lineHeight: "41.48px",
                  marginTop: "10px",
                }}
              >
                How We Works
              </Typography>
            </Box>
            <Box sx={{ mt: "20px", px: "20px",py:"10px" }}>
              <Grid container sx={{ position: "relative" }}>
                <Grid item xs={12} lg={6}>
                  <Box
                    sx={{
                      img: {
                        width: { xs: "100%", lg: "575px" },
                        objectFit:{xs:"cover",lg:"fill"}
                      },
                    }}
                  >
                    <img src="/people2.jpg" alt="people2" height={"433px"} />
                  </Box>
                  <Box
                    sx={{
                      height: "237px",
                      width: "250px",
                      position: "absolute",
                      background: "#fff",
                      left: "327px",
                      bottom: "-34px",
                      display: { xs: "none", lg: "block" },
                    }}
                  ></Box>
                  <Box
                    sx={{
                      position: "absolute",
                      left: "340px",
                      bottom: "-85px",
                      display: { xs: "none", lg: "block" },
                    }}
                  >
                    <img src="/people3.jpg" alt="people3" />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Grid
                    container
                    spacing={"30px"}
                    mt={"20px"}
                    sx={{ px: { md: "50px" } }}
                  >
                    {works.map((item, index) => (
                      <React.Fragment key={index}>
                        {" "}
                        <Grid item sx={{ display: "flex",gap:"10px"}}>
                          <Box>
                            <img
                              src={item.logo}
                              alt={item.title}
                              width={"60px"}
                              height={"60px"}
                            />
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Rubik",
                                fontSize: "25px",
                                fontWeight: "400",
                                lineHeight: "29.63px",
                                color: "#1C1F35",
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontfamily: "Krub",
                                fontSize: "16px",
                                fontWeight: "500",
                                lineHeight: "24.24px",
                                textAlign: "left",
                                color: "#666C89",
                                marginTop: "10px",
                              }}
                            >
                              {item.description}
                            </Typography>
                          </Box>
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{mt:{xs:"40px",lg:"100px"}}}>
            <Grid>
                <Button sx={{width:"85px",height:"32px",background:"#FFE377",color:"#404040"}}>Service</Button>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "/pages-sections/LandingPage-Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Otis"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        {...rest}
      />
      {/* <Parallax filter responsive image="https://img.freepik.com/premium-photo/content-marketing-cycle-creating-publishing-distributing-content-targeted-audience-online-analysis_150455-17648.jpg?w=2000"> */}
      <Parallax filter responsive image="/img/otis-personal-assistent.png">
      {/* <Parallax filter responsive image="https://cdn.discordapp.com/attachments/1056961370085658674/1058358904486105108/GLocoop_photo_realistic_high_detail_red_head_girl_ab01a20e-d0a0-4292-9292-b993847540ad.png"> */}
      
        <div className={classNames(classes.container)}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Social Media Personal assistent</h1>
              <h4>
              Your private AI Assistent!<br />              
              <br /><br /> Every tool you need to grow your social media accounts
              < br /><br />AI powered automated media email marketing, audience engagement, content creation 
              collaboration, analytics, and finance for your media personal business!<br /><br />
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/*<TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

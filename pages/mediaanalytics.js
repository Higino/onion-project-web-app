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
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import MediaAnalyticsSection from "/pages-sections/LandingPage-Sections/MediaAnalyticsSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function mediaanalytics(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Home"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "primary"
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/otis-personal-assistent.png">      
        <div className={classNames(classes.container)}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Ai Media Analytics</h1>
              <h4>
                Collect all your media KPIs from all your media accounts into one place and let Otis help you to analyze your media performance.
                Automatic insights and recommendations to help you to improve your media performance.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <MediaAnalyticsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
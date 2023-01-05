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
import AudienceEngagementSection from "/pages-sections/LandingPage-Sections/AudienceEngagementSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AudienceEngagement(props) {
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
      <Parallax filter responsive image="/img/otis-personal-assistent.png">      
        <div className={classNames(classes.container)}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Audience Engagement</h1>
              <h4> See all your audience engagement in one place. All the comments, likes, and shares from your posts in one place and let Otis help you to engage with your audience.

              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <AudienceEngagementSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

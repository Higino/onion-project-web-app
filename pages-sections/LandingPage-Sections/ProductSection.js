import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PreregisterButton from "/components/CustomButtons/PreregisterButton.js";
import NavPills from "/components/NavPills/NavPills.js";
import featureTabs from "/pages-sections/LandingPage-Sections/FeaturesTabs.js";

// @material-ui/icons
import { Accessibility, AccountBox, Assessment, AttachMoney, 
         Contactless, EmojiObjects, Schedule, Storefront, TrendingUp } from "@material-ui/icons";


// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";


import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <InfoArea
              title="Financial partner"
              description="Every business needs money to grow. We understand your business is social media and provide you with the best finance to be a 
              successfull influencer. Wether to buy your first digital equipment or software licences or even to hire your first content 
              editors we are here for you. Enjoy cash advance options or just apply for a loan, we understand your needs."
              icon={AttachMoney}
              iconColor="rose"
              vertical
              to="financepartner"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Audience Engagement"
              description="Centralize all your content interactions in one place and never miss a comment again. 
                           Using our AI powered personal assistent, you can automate all your interactions with your audience."
              icon={Contactless}
              iconColor="info"
              vertical
              to="audienceengagement"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Your marketplace"
              description="Search from thousands of professionals (designers, content translation, video editing, etc) from our marketplace. Have bids on work you need, hire professional with the best bid and hire them for the tasks you need."
              icon={Storefront}
              iconColor="info"
              vertical
            />
          </GridItem>

        </GridContainer>        
      </div>
    <div>
      <GridContainer justify="center" spacing={7}>
        <GridItem xs={12} sm={12} md={8}>
          <PreregisterButton color="success" size="lg" />
          <h5 className={classes.description}>
                <b>Invest in a partener that knows how to Invest in you</b>
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  </div>
  </>
  );
}

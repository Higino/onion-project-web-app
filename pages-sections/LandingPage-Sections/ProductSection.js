import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PreregisterButton from "/components/CustomButtons/PreregisterButton.js";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { Accessibility, AccountBalance, AccountBox, Assessment, AttachMoney, AutorenewTwoTone, ChatBubbleOutline, Contactless, ContactMail, EmojiObjects, LocalGroceryStore, ModeComment, Schedule, Storefront, TimelapseSharp, TrendingUp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Automated Audience Engagement"
              description="Centralize all your content interactions in one place and never miss a comment again. 
                           Using our AI powered personal assistent, you can automate all your interactions with your audience."
              icon={Contactless}
              iconColor="info"
              vertical
              to="audienceengagement"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Content Colaboration"
              description="Collaborate with your editors and designers to create content faster. Comment on edits, propose changes, and approve content in one place."
              icon={Accessibility}
              iconColor="success"
              vertical
              to="contentcollaboration"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="AI Media Analytics"
              description="Auto generate your content KPIs and get a detailed report on your content performance. Don't lose time on manual reporting we build the reports for you so you can make decisions faster. Analytics reports targeted to the audience and platform you publish your content on."
              icon={Assessment}
              iconColor="danger"
              vertical
              to="mediaanalytics"
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Finance partner"
              description="Every business needs money to grow. We understand your business and provide you with the best finance to be a successfull influencer. Wether to buy your first digital equipment or software licences or even to hire your first content editors we are here for you.  "
              icon={AttachMoney}
              iconColor="rose"
              vertical
              to="financepartner"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Your marketplace"
              description="Search from thousands of professionals (designers, content translation, video editing, etc) from our marketplace. Have bids on work you need, hire professional with the best bid and hire them for the tasks you need."
              icon={Storefront}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Trend Analyser"
              description="Evaluate what is trenfding now. Our AI will help you find the best content ideas and help you create content that will be a success."
              icon={TrendingUp}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Thumbnail Generator"
              description="Stunning thumbnails for your videos automatically based on the video content."
              icon={AccountBox}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Idea Generator"
              description="Stunning thumbnails for your videos automatically based on the video content."
              icon={EmojiObjects}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>        
      </div>
      <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Pre-register for your AI personal assistent</h2>
          <PreregisterButton color="success" size="lg" />
          <h5 className={classes.description}>
                <b>All-in-one tool for social media creators! </b>
                Save up to 80% of your time and get more done in less time by pre registring to access our AI personal assistent. Available only for a limited time.
          </h5>
        </GridItem>
      </GridContainer>

      </div>
    </div>
  );
}

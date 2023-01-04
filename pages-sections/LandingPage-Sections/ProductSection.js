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
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Pre-register for your AI personal assistent</h2>
          <PreregisterButton color="success" size="lg" />
          <h5 className={classes.description}>
                <b>All-in-one tool for social media creators! </b>
                Whether you're still a small content creator, an influencer, or an internet opinion maker, 
                Otis will help you manage your social medial like a pro. 
                <br/><br/><b>Our powerful AI personal assistent</b> will allow you to automate all the important tasks, of being a content creator and scale your audience.
                Our AI prowess will allow you to create content faster, engage with your audience better, finance to grow your brand and analyze your content performance.
          </h5>
        </GridItem>
      </GridContainer>
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
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Content Colaboration"
              description="Collaborate with your editors and designers to create content faster. Comment on edits, propose changes, and approve content in one place."
              icon={Accessibility}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="AI Media Analytics"
              description="Auto generate your content KPIs and get a detailed report on your content performance. Don't lose time on manual reporting we build the reports for you so you can make decisions faster. Analytics reports targeted to the audience and platform you publish your content on."
              icon={Assessment}
              iconColor="danger"
              vertical
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
    </div>
  );
}

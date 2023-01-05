import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { Accessibility, AccountBalance, AccountBox, Assessment, AttachMoney, AutorenewTwoTone, ChatBubbleOutline, Contactless, ContactMail, EmojiObjects, LocalGroceryStore, ModeComment, QuestionAnswer, Schedule, Storefront, TimelapseSharp, TrendingUp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function ContentCollaborationSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Content Collaboration</h2>
          <h5 className={classes.description}>
                <b>A futurisctic feature that should be described here in more detail! </b>
                Otis should be able to allow content creators and content designers to collaborate on content. Comment on content, suggest edits, and approve content.
                More details to be added here ....
          </h5>
        </GridItem>
      </GridContainer>
      <div>
            <InfoArea
              title="More content should go here"
              description="Consider generating thumbnails showing how this feature can be used or mocks on how the feature will look like."
              icon={QuestionAnswer}
              iconColor="info"
              vertical
              to="/audienceengagement"
            />
      </div>
    </div>
  );
}

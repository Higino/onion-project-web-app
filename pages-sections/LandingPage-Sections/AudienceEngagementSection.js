import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PreregisterButton from "/components/CustomButtons/PreregisterButton.js";
import Info from "/components/Typography/Info.js";
import Primary from "/components/Typography/Primary.js";
// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Accessibility, AccountBalance, AccountBox, Assessment, AttachMoney, AutorenewTwoTone, ChatBubbleOutline, Contactless, ContactMail, EmojiObjects, LocalGroceryStore, ModeComment, QuestionAnswer, Schedule, Storefront, TimelapseSharp, TrendingUp } from "@material-ui/icons";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AudienceEngagementSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
          <h2 className={classes.title}>Your Ultimate Sentiment Analyzer and Auto-Responder!</h2>
          <h5 className={classes.description}>
            <b>Never miss a beat with our intelligent auto-reply feature! </b>Otis empowers you to respond to your audience in real-time, just like the content owner would, ensuring you never leave a question unanswered or an opportunity untapped. Seamlessly customize your responses and let our system handle the rest, saving you time and energy while boosting your brand's reputation for exceptional customer engagement.
            Whether you're a social media influencer, a business owner, or a content creator, Otis is your secret weapon to stay connected, understand your audience on a deeper level, and foster meaningful interactions that drive success. Join the ranks of top-performing social media powerhouses today and experience the difference with Otis.
          </h5>
          <PreregisterButton color="success" size="lg" />
    </div>
  );
}

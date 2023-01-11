import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

// @material-ui/icons

// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import HeaderLeftLinks from "/components/Header/HeaderLeftLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page. Each section is a feature of the product detailing what it does and how it works.
import ProductSection from "/pages-sections/LandingPage-Sections/ProductSection.js";
import AudienceEngagementSection from "/pages-sections/LandingPage-Sections/AudienceEngagementSection.js";
import ContentCollaborationSection from "/pages-sections/LandingPage-Sections/ContentCollaborationSection.js";
import MediaAnalyticsSection from "/pages-sections/LandingPage-Sections/MediaAnalyticsSection.js";
import FinancePartnerSection from "/pages-sections/LandingPage-Sections/FinancePartnerSection.js";


import { oneOf } from "prop-types";
import { useRouter } from 'next/router';

const dashboardRoutes = [];


// This is how landing page works:
// 1. The landing page is a page with a dynamic content based on the feature parameter in the url.
// 2. The feature parameter is used to determine which section to render.
// 3. The feature parameter is also used to determine which image to render in the header of the landing page
// 4. The feature parameter is one of the following: audienceengagement, contentcollaboration, mediaanalytics, financepartner which are the features of the product.
// 5. Depending on the feature parameter, the header image, header title, and the active section are determined and rendered.
// 6. By default, the feature parameter is set to main, which renders the main landing page of the product

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const router = useRouter();
  const { feature } = router.query;
  const { ...rest } = props;
  let imageSrc;
  let headerTitle;
  let headerText;
  let activeSection;

  switch (feature) {
    case 'audienceengagement':
      imageSrc = '/img/audience-engagement.png';
      headerTitle = 'Audience Engagement';
      headerText = <>See all your audience engagement in one place. All the comments, likes, and shares from your posts in one place and let Otis help you to engage with your audience.</>;
      activeSection = <AudienceEngagementSection />;
      break;
    case 'contentcollaboration':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Content Collaboration';
      headerText = <>Review and approve content before it goes live. Otis will help you to collaborate with your team and get content approved before it goes live. Comment on content and get notified when your content is approved. Provide feedback and get notified when your content is approved.</>;
      activeSection = <ContentCollaborationSection />;
      break;
    case 'mediaanalytics':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Media Analytics';
      headerText = <>Collect all your media KPIs from all your media accounts into one place and let Otis help you to analyze your media performance. Automatic insights and recommendations to help you to improve your media performance.</>;
      activeSection = <MediaAnalyticsSection />;
      break;
    case 'financepartner':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Financial partner';
      headerText = <>TBC.</>;
      activeSection = <FinancePartnerSection />;
      break;
    case 'marketplace':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Marketplace';
      headerText = <>TBC.</>;
      activeSection = <FinancePartnerSection />;
      break;
    case 'trendanalyser':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Trend Analyser';
      headerText = <>TBC.</>;
      activeSection = <FinancePartnerSection />;
      break;
    case 'thumbnailgenerator':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Thumbnail Generator';
      headerText = <>TBC.</>;
      activeSection = <FinancePartnerSection />;
      break;
    case 'ideasgenerator':
      imageSrc = '/img/content-collaboration.png';
      headerTitle = 'Idea Generator';
      headerText = <>TBC.</>;
      activeSection = <FinancePartnerSection />;
      break;
    default:
    imageSrc = '/img/otis-personal-assistent.png';
    headerTitle = 'Social Media Personal Assistent';
    headerText = <>All-in-one tool for social media creators! Whether you're still a small content creator, an influencer, or an internet opinion maker, Otis will help you manage your social medial like a pro.< br /><br />Our powerful AI personal assistent will allow you to automate all the important tasks, of being a content creator and scale your audience. Our AI prowess will allow you to create content faster, engage with your audience better, finance to grow your brand and analyze your content performance.</>;
    activeSection = <ProductSection />;
  }
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand=""
        rightLinks={<HeaderLinks />}
        leftLinks={<HeaderLeftLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "primary"
        }}
        {...rest}
      />
      <Parallax filter responsive image={imageSrc}>      
        <div className={classNames(classes.container)}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h2 className={classes.title}>{headerTitle}</h2>
              <h4>{headerText}</h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {activeSection}
        </div>
      </div>
      <Footer />
    </div>
  );
}

LandingPage.defaultProp = {
  feature: 'main'
};

LandingPage.propTypes = {
  headerTitle: PropTypes.string,
  imageSrc: PropTypes.string,
  headerText: PropTypes.element,
  activeSection: PropTypes.element,
  feature: oneOf([
    'main',
    'audienceengagement', 
    'contentcollaboration',
    'mediaanalytics',
    'financepartner',
    'marketplace',
    'trendanalyser',
    'thumbnailgenerator',
    'ideasgenerator']),
};
/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

// core components
import Button from "/components/CustomButtons/Button.js";
import Email from "@material-ui/icons/Email";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

import { useRouter } from 'next/router';

const useStyles = makeStyles(styles);

export default function HeaderLinksCustom(props) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            router.push({
              pathname: '/landing',
              query: { feature: 'audienceengagement' }
            });
          }}
          className={classes.navLink}
        >
          <PersonAddAltIcon className={classes.icons} /> Audience
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            router.push({
              pathname: '/landing',
              query: { feature: 'contentcollaboration' }
            });
          }}
          className={classes.navLink}
        >
          <OndemandVideoIcon className={classes.icons} /> Content
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#"
          color="transparent"
          target="_blank"
          onClick={(e) => {
            e.preventDefault();
            router.push({
              pathname: '/landing',
              query: { feature: 'financepartner' }
            });
          }}
          className={classes.navLink}
        >
          <AttachMoneyIcon className={classes.icons} /> Finance
        </Button>
      </ListItem>    </List>
  );
}

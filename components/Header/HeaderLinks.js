/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons

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
      <ListItem className={classes.listItem}>  {/* Twitter Menu */}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="#"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>  {/* Facebook Menu */}
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>  {/* Instagram Menu */}
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>  {/* Login/Register Menu */}
        <Link href="/login">
          <Button
            color="transparent"
            target="" // To Open in new tab use target="_blank"
            className={classes.navLink}
          >
          <Icon className={classes.icons}>fingerprint</Icon> Pre-register
          </Button>
        </Link> 
      </ListItem>
    </List>
  );
}

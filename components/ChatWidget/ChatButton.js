import React, {useState} from "react";

import {styles} from "./styles";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ChatButton(props) {
    const classes = useStyles();
    const [hovered, setHovered] = useState(false);

    return (
        <>
        <div >
        <Tooltip title="Ask me what you need and I will tell you how I work 🤙" placement="top">
        <div 
            onMouseEnter={() => {setHovered(true); }}
            onMouseLeave={() => setHovered(false)}
            onClick={(e) => props.onClick && props.onClick(e)}
            className={classNames(classes.transition3, classes.chatWithMeButton)}
            style={{
                ...{ border: hovered ? '1px solid #f9f0ff' : '3px solid #7a39e0' }
            }}
        />
        </Tooltip>
        </div>
        </>
    )
}



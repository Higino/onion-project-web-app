import React, { useEffect } from "react";
import { useState } from "react";
import ChatButton from "./ChatButton";

import {styles} from "./styles";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import ChatWindow from "./ChatWindow";


const useStyles = makeStyles(styles);

    
export default function ChatWidget(props) {
    const ref = React.useRef(null);
    const [visible, setVisible] = useState( props.widgetOpen? props.widgetOpen : false);
    const classes = useStyles();
    
    const openChatWindow = (e) => {
        e.preventDefault();
        setVisible(true);
    }

    useEffect(() => {
        // Function to handle click outside the chat window
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setVisible(false);
            }
        }

        // Add and remove event listener for click outside
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref]);
    return (
        <>  
        <div style={{...props.style}}>
            <div ref={ref} className={classNames(classes.transition3)} 
                style={{
                        ...{opacity: visible ? '1': '0'},
                        ...{visibility: visible ? 'visible': 'hidden'}, 
                        }} >
                <ChatWindow />   
            </div>
            <ChatButton onClick={openChatWindow}/>
            </div>
        </>
    )
}
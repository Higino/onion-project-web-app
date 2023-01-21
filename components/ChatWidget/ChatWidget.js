import React, { useEffect } from "react";
import { useState } from "react";
import ChatButton from "./ChatButton";

import {styles} from "./styles";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import ChatSection from "../../pages-sections/LandingPage-Sections/ChatSection";
import CircularProgress from '@mui/material/CircularProgress';


const useStyles = makeStyles(styles);

    
export default function ChatWidget(props) {
    const ref = React.useRef(null);
    const [visible, setVisible] = useState( props.widgetOpen? props.widgetOpen : false);
    const classes = useStyles();
    
    const openChatWindow = (e) => {
        e.preventDefault();
        setVisible(visible? false : true);
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
    }, [ref, setVisible]);
    return (
        <>
        <div>
            <div
                ref={ref}
                className={classNames(classes.chatWindow, classes.transition5)} 
                style={{...{opacity: visible ? '1': '0'}}}>
                    <div
                    style={{
                        ...{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}
                    }}>
                        <CircularProgress />
                    </div>
                    <ChatSection />
            </div>
            <ChatButton onClick={openChatWindow} isVisible={!visible}
                style={{...props.style}} />
        </div>
        </>
    )
}
import zIndex from "@material-ui/core/styles/zIndex";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import ChatSection from "../../../pages-sections/LandingPage-Sections/ChatSection";
import ChatWindow from "./ChatWindow";

const ChatEngine = props => {
    return (
        <div
            style={{
                ...styles.chatEngineWindow,
                ...{ 
                    height: props.visible ? '100%' : '0px',
                    zIndex: props.visible ? '1000' : '0',
                },
                ...styles.transition5
            }}
        >
                <ChatWindow style={{
                    ...styles.chatEngineWindow,
                }}/>
                {/* <ChatEngineWrapper>
                    <Socket 
                        projectID={process.env.REACT_APP_CE_PROJECT_ID}
                        userName={props.user.email}
                        userSecret={props.user.email}
                    />
                    <ChatFeed activeChat={props.chat.id} />
                </ChatEngineWrapper> */}
        </div>
    )
}

export default ChatEngine;


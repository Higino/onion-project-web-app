import React, { useState } from "react"

import { styles } from "../styles";

import EmailForm from "./EmailForm";
import ChatEngine from "./ChatEngine";

const SupportWindow = props => {
    const [user, setUser] = useState(null)
    const [chat, setChat] = useState([])

    return (
        <div 
            className='transition-5'
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
            {/* <EmailForm 
                visible={user === null || chat === null}
                setUser={user => setUser(user)} 
                setChat={chat => setChat(chat)} 
            /> */}

            <ChatEngine 
                visible={user === null && chat === null}
                user="me" 
                chat={chat} 
            />
        </div>
    )
}

export default SupportWindow;
import React, { useState } from "react";

import { styles } from './styles'

const Avatar = props => {
    const [hovered, setHovered] = useState(false)

    const handleOnClick = (e) => {
        props.onClick && props.onClick()
    }

    return (
        <div style={props.style}>
            <div 
                style={{
                    ...styles.avatarHello,
                    ...{ opacity: hovered && props.visible ? '1' : '0' },
                    ...styles.transition3
                }}
            >
                Hey it's Otis 🤙<br />Chat with me
            </div>

            <div 
                onMouseEnter={(e) => setHovered(true)}
                onMouseLeave={(e) => setHovered(false)}
                onClick={() => {handleOnClick()}}
                style={{
                    ...styles.chatWithMeButton,
                    ...{ border: hovered ?'1px solid #f9f0ff' : '4px solid #7a39e0'},
                    ...{ visibility: props.visible ? 'visible' : 'hidden' },
                }}
            />
        </div>
    )
}

export default Avatar;
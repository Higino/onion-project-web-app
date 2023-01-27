import React, { useRef, useEffect, useState } from "react";

import SupportWindow from './SupportWindow'

import Avatar from './Avatar'

const SupportEngine = (props) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    const [visible, setVisible] = useState(false)

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setVisible(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return (
        <div ref={wrapperRef}>
            <SupportWindow visible={visible} style={{...props.style}}/>

            <Avatar 
                onClick={() => setVisible(true)}
                style={{...props.style}}
                visible={!visible}
            />
        </div>
    )
}

export default SupportEngine;
import React, { useEffect, useRef } from "react";
import { broadcaster } from "project-lib/messaging";

const IFrameComponent = ({ title, src}) => {

    const frameRef = useRef(null);

    useEffect(() => {
        broadcaster(frameRef, { type: "parent-message", data: `Hello Child ${title}`});
    }, [title]);    

    const onClick = () => {
        broadcaster(frameRef, { type: "parent-message", data: `Hello Child ${title}`});  
    }

    return (
        <div style={{ height: "250px", width: "250px"}}>
            <button onClick={onClick}>Send to Child {title}</button>
            <iframe title={title} src={src} ref={frameRef}/>
        </div>);
}

export default IFrameComponent;
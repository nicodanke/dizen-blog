import React from "react";
import { SocialButton } from "./Style";

const Social = (props) => {
    // Use Font Awesome for TikTok, Line Awesome for others
    const iconClass = props.social === 'tiktok'
        ? `fab fa-${props.icon}`
        : `lab la-${props.icon}`;

    return (
        <a href={props.link} aria-label={props.social} title={props.social} target="_blank" rel="noopener noreferrer">
            <SocialButton social={props.social} margin={props.margin}>
                <i className={iconClass}></i>
            </SocialButton>
        </a>
    );
};

export default Social;
import React from "react";

interface IconProps {
    width?: string;
    height?: string;
}

const FacebookIcon: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg width={width ?? "24"} height={height ?? "24"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_134_2226)">
                <path d="M12 24.0017C18.6274 24.0017 24 18.6291 24 12.0017C24 5.37429 18.6274 0.00170898 12 0.00170898C5.37258 0.00170898 0 5.37429 0 12.0017C0 18.6291 5.37258 24.0017 12 24.0017Z" fill="#1977F3" />
                <path d="M16.671 15.4712L17.2026 12.0017H13.8747V9.75051C13.8747 8.80212 14.3388 7.87566 15.8306 7.87566H17.3443V4.92249C17.3443 4.92249 15.9707 4.68793 14.6578 4.68793C11.9172 4.68793 10.1251 6.34845 10.1251 9.35731V12.0017H7.07739V15.4712H10.1251V23.8565C10.7359 23.9527 11.362 24.0017 11.9999 24.0017C12.6378 24.0017 13.2639 23.951 13.8747 23.8565V15.4712H16.671Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_134_2226">
                    <rect width={height ?? "24"} height={height ?? "24"} fill="white" />
                </clipPath>
            </defs>
        </svg>


    );
};

export default FacebookIcon;
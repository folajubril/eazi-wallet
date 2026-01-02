import React from "react";

interface IconProps {
    width?: string;
    height?: string;
}

const LeftChevron: React.FC<IconProps> = ({ width, height }) => {
    return (
       <svg width={width ?? "20"} height={height ?? "20"} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.02341 10L13.1484 14.125L11.9701 15.3033L6.66675 10L11.9701 4.69667L13.1484 5.875L9.02341 10Z" fill="#1D62CA"/>
</svg>


    );
};

export default LeftChevron;
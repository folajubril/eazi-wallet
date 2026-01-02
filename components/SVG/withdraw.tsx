import React from "react";

interface IconProps {
    width?: string;
    height?: string;
}

const WithdrawIcon: React.FC<IconProps> = ({ width, height }) => {
    return (
        <svg width={width || "16"} height={height || "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12.6667H14V14H2V12.6667ZM8.66667 8.78137L12.714 4.73337L13.6567 5.67604L8 11.3334L2.34333 5.67671L3.286 4.73337L7.33333 8.78004V1.33337H8.66667V8.78137Z" fill="white" />
        </svg>

    );
};

export default WithdrawIcon;
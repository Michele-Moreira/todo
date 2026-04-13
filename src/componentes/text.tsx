import React from "react";

interface TextProps {
    as?: keyof React.JSX.IntrinsicElements;
}

export default function Text({className, children, ...props}) {
    return React.createElement(
        as,
        {
            className,
            ...props
        }
        children
    )
}
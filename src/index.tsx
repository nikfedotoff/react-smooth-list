import React, { JSXElementConstructor, PropsWithChildren, useEffect, useState } from "react";
  
interface Props {
    transitionDuration?: number;
    delay?: number;
    wrapperTag?: JSXElementConstructor<any>;
    childTag?: JSXElementConstructor<any>;
    className?: string;
    childClassName?: string;
    visible?: boolean;
    animated?: boolean;
    onComplete?: () => any;
}
  
const SmoothList = (props: PropsWithChildren<Props>) => {
    const [maxIsVisible, setMaxIsVisible] = useState(0);

    const delay = props.delay || 50,
          animated = props.animated ?? true,
          transitionDuration = props.transitionDuration || 400,
          visible = typeof props.visible === "undefined" ? true : props.visible,
          WrapperTag = props.wrapperTag || "div",
          ChildTag = props.childTag || "div";
  
    useEffect(() => {
        let count = React.Children.count(props.children);
        if (!visible) {
            // Animate all children out
            count = 0;
        }

        if (count == maxIsVisible) {
            // We're done updating maxVisible, notify when animation is done
            const timeout = setTimeout(() => {
                if (props.onComplete) props.onComplete();
            }, transitionDuration);
            
            return () => clearTimeout(timeout)
        }

        // Move maxIsVisible toward count
        const increment = count > maxIsVisible ? 1 : -1;
        const timeout = setTimeout(() => {
            setMaxIsVisible(maxIsVisible + increment);
        }, delay);
        
        return () => clearTimeout(timeout)
    }, [
        React.Children.count(props.children),
        delay,
        maxIsVisible,
        visible,
        transitionDuration,
    ])
  
    return (
        <WrapperTag className={props.className}>
            {animated ? React.Children.map(props.children, (child, i) => {
                return (
                    <ChildTag
                        className={props.childClassName}
                        style={{
                        transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                        transform: maxIsVisible > i ? "none" : "translateY(20px)",
                        opacity: maxIsVisible > i ? 1 : 0,
                        }}
                    >
                        {child}
                    </ChildTag>
                )
            }) : props.children}
        </WrapperTag>
    )
}

export default SmoothList;
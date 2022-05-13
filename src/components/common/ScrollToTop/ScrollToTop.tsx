import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = (props: any) => {
    // console.log("ScrollToTop")
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};


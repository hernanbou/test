import { useState, useEffect } from "react"

export const windowResize = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const breakpoint = 1024

    useEffect(() => {

        const handleWindowResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);

    }, [])

    return { screenWidth, breakpoint }
}
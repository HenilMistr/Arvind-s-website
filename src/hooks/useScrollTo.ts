"use client";

import { useCallback } from "react";

export const useScrollTo = () => {
    const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();

        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            const offset = 40; // Tune this value to adjust scroll position (Lower = scrolls further down)
            const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, []);

    return scrollToSection;
};

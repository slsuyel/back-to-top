"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const BackToTop = ({ className }) => {
    const [scrollProgress, setScrollProgress] = (0, react_2.useState)(0);
    const [dashOffset, setDashOffset] = (0, react_2.useState)(0);
    (0, react_2.useEffect)(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const fullHeight = document.documentElement.scrollHeight;
            const progress = (scrollTop / (fullHeight - windowHeight)) * 100;
            setScrollProgress(progress);
            // Calculate the dash offset dynamically
            const newDashOffset = 305 * (1 - progress / 100);
            setDashOffset(newDashOffset);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const visibilityStyle = {
        opacity: scrollProgress > 20 ? 1 : 0,
        pointerEvents: scrollProgress > 20 ? "auto" : "none",
        position: "fixed",
        right: "50px",
        bottom: "90px",
        height: "46px",
        width: "46px",
        cursor: "pointer",
        borderRadius: "50px",
        boxShadow: "inset 0 0 0 2px rgba(95, 58, 252, 0.2)",
        zIndex: 99,
        transition: "all 200ms linear",
        transform: scrollProgress > 20 ? "translateY(0)" : "translateY(15px)",
        visibility: scrollProgress > 20 ? "visible" : "hidden",
    };
    const circleStyle = {
        stroke: "#2b4eff",
        strokeWidth: 4,
        boxSizing: "border-box",
        transition: "all 200ms linear",
        strokeDasharray: "299.875",
        strokeDashoffset: dashOffset, // Set dynamically
    };
    const iconStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) rotate(180deg)",
    };
    return (react_1.default.createElement("div", { className: `back-to-top ${className}`, style: visibilityStyle, onClick: handleBackToTop },
        react_1.default.createElement("svg", { className: "", width: "100%", height: "100%", viewBox: "-1 -1 102 102", fill: "none" },
            react_1.default.createElement("path", { d: "M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98", style: circleStyle })),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", viewBox: "0 0 24 24", fill: "none", stroke: "#2b4eff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: iconStyle },
            react_1.default.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
            react_1.default.createElement("polyline", { points: "19 12 12 19 5 12" }))));
};
exports.default = BackToTop;

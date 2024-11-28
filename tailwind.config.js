/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#9333ea",
                    secondary: "#dfdfdf",
                    accent: "#93E13A",
                    neutral: "#efefef",
                    "base-100": "#fefefe",
                    info: "#fde047",
                    success: "#008b26",
                    warning: "#fb923c",
                    error: "#e90037",
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#9333ea",
                    secondary: "#dfdfdf",
                    accent: "#93E13A",
                    neutral: "#343434",
                    "base-100": "#27272A",
                    info: "#fde047",
                    success: "#008b26",
                    warning: "#fb923c",
                    error: "#e90037",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};

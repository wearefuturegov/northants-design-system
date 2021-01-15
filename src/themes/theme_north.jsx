export const north_vars = {
    theme_name: "North Northants theme",
    full_name: "North Northamptonshire",
    cardinal_name: "north",
    council_link: "https://beta.northnorthants.gov.uk",
    other_council_link: "https://beta.westnorthants.gov.uk",
    other_council_name: "West Northamptonshire",
    breakpoints: {
        s: "550px",
        m: "768px", // tablets and larger
        l: "1160px", // desktops and larger
        xl: "1440px", // large desktops only
    },
    colours: {
        black: "#000000",
        grey_dark: "#757575",
        grey: "#C6C6C6",
        grey_light: "#F5F5F5",
        white: "#FFFFFF",

        action: "#05873A",
        action_light: "#F3F9F5",
        action_dark: "#065325",
        positive: "#1A9DD9",
        negative: "#B73131",

        focus: "#E2CA76"
    },
    fontstack: "Arial, Helvetica, sans-serif",
    fontSizes: {
        extra_small: ".9em",
        small: "1em",
        medium: "2em",
        large: "3em"
    },
    border_radius: "3px",
    spacingSizes: {
        extra_small: "5px",
        small: "10px",
        medium: "20px",
        large: "30px"
    },
    h1: `
        font-size: 32px;
        font-size: 2rem;
        font-weight: 700;

        @media (min-width: 40.0625em) {
            font-size: 48px;
            font-size: 3rem;
        }
    `,
    h2: `
        font-size: 24px;
        font-size: 1.5rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 36px;
            font-size: 2.25rem;
        }
    `,
    h3: `
        font-size: 18px;
        font-size: 1.125rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 24px;
            font-size: 1.5rem;
        }
    `,
    h4: `
        font-size: 16px;
        font-size: 1rem;
        font-weight: 700;
        
        @media (min-width: 40.0625em) {
            font-size: 19px;
            font-size: 1.1875rem;
        }
    `
}
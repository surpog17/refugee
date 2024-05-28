/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#4f80e1", // Change this to your desired color
        secondary: "#f4f1ec", // Change this to your desired color
      },
      textColor: {
        primary: "#4f80e1", // Change this to your desired color
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"], // Change 'Arial' to your desired font family
      },
      dropShadow: {
        sm: "0 1px 1px rgba(0, 0, 0, 0.05)",
        md: "0 4px 3px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 8px rgba(0, 0, 0, 0.2)",
        xl: "0 20px 13px rgba(0, 0, 0, 0.25)",
        "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
        custom: "0 5px 5px rgba(255, 0, 0, 0.5)", // Custom example
      },
    },
  },
  plugins: [],
};

import { createUseStyles } from "react-jss";

const rootStyle = {
    width: 400,
    border: "1px solid grey",
    margin: "0px auto",
    padding: 15
};

const fontStyle = {
    fontWeight: "bold",
    fontStyle: "italic"
};

const useStyles = createUseStyles({
    root: {
        ...rootStyle,
        "& h1": {
            textAlign: "center",
            color: "purple"
        },
        "& .basic_h2": {
            textAlign: "right",
            color: "green",
            cursor: "pointer",
            "&:hover": {
                color: "purple"
            }
        }
    },
    content_div: {
        textAlign: "justify",
        ...fontStyle
    }
});

export default useStyles;
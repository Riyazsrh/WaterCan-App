/** @format */

import theme from "../../Theme/Theme";
export const Styles: any = {
    // TypoTxt: {
    //     fontWeight: '700 !important',
    //     fontSize: "24px !important",
    // },
    textContent2: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    inputField: {
        [`& fieldset`]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            border: "none !important",
            borderRight: 0,
        },
        [`& input`]: {
            padding: "10px",
            width: "300px",
            background: "#F2F2F2",
            borderTopLeftRadius: "10px !important",
            borderBottomLeftRadius: "10px !important",
            [theme.breakpoints.down("sm")]: {
                paddingBottom: "15px",
                borderTopLeftRadius: "0px !important",
                borderBottomLeftRadius: "0px !important",
                width: "475px !important",
                height: "50px !important",
            },
        },
    },
    halfButton: {
        [`& button`]: {
            borderTopRightRadius: "10px !important",
            borderBottomRightRadius: "10px !important",
            padding: "11px 8px",
            minWidth: "45px !important",
            borderRadius: 0,
            background: "#1C97FD !important",
            "&:hover": {
                background: "#1C97FD",
            },
            [theme.breakpoints.down("sm")]: {
                borderTopRightRadius: "0px !important",
                borderBottomRightRadius: "0px !important",
                padding: "13px",
            },
        },
        [`& span`]: {
            marginRight: 0,
        },
    },

};

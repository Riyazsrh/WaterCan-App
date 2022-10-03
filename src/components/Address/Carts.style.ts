
export const Styles = (theme: any) => ({
    RadioCard: {
        width: "100%",
        // height: "190px",
        margin: '35px 20px 25px 0px !important',
        background: ' #FFFFFF',
        borderRadius: '12px !important',
        boxShadow: ' 0 0px 1px rgb(0 0 0 / 40%), 0 10px 16px #ddd !important',
        [theme.breakpoints.only('md')]: {
            height: '210px',
        },
    },
    TypoTxt: {
        fontWeight: '700 !important',
        fontSize: "24px !important",
        marginLeft: "15px !important",

    },
    Editbtn: {
        color: "#423737 !important",
        fontFamily: 'Inter ',
        fontStyle: 'normal ',
        width: "50%",
        height: "43px",
        fontWeight: '600 !important',
        border: "1px solid #8DCBFE !important",
        marginTop: "15px !important",
    },
    RadioName: {
        color: '#423737 !important',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600 !important',
        fontSize: "16px !important",
    },
    cartAdd: {
        color: '#A2A3A5 !important',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500 ',
        fontSize: "16px !important",

    },
   

})
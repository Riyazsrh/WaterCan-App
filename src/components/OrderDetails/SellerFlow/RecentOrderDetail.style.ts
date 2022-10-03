export const Styles = (theme: any) => ({
    TypoTxt: {
        fontWeight: '700 !important',
        fontSize: "24px !important",
    },
    container: {
        marginBottom:"20px !important",
        [theme.breakpoints.down('md')]:{
            marginTop:"25px !important"
        }
    },
    Deliverbtn: {
        color: "#423737 !important",
        fontFamily: 'Inter ',
        fontStyle: 'normal ',
        width: "150px",
        height: "43px",
        fontWeight: '600 !important',
        border: "1px solid #1C97FD !important",
        marginLeft: "20px !important",
        [theme.breakpoints.down('sm')]:{
            width:"100% !important",
            margin: "20px auto !important",
        }
    },
    Transferbtn: {
        color: "#FFFFFF !important",
        fontFamily: 'Inter ',
        fontStyle: 'normal ',
        width: "150px",
        height: "43px",
        fontWeight: '600 !important',
        border: "1px solid #1C97FD !important",
        background: "#1C97FD !important",
        marginLeft: "10px !important",
    },
    Icons1: {
        borderRadius: "20px !important",
        height: "35px !important",
        width: "36px !important",
        padding: "3px"
    },
    Icons2: {
        borderRadius: "20px !important",
        height: "35px !important",
        width: "36px !important",
        padding: "3px"
    },
    OrderCards: {
        background: '#FFFFFF',
        borderRadius: '10px !important',
        boxShadow: ' 0 0px 1px rgb(0 0 0 / 40%), 0 10px 16px #ddd !important',
    },
    orderText: {
        lineHeight: "40px !important",
        color: " #A2A3A5",
    },
    Editbtn: {
        color: "#423737 !important",
        fontFamily: 'Inter ',
        fontStyle: 'normal ',
        width: "150px",
        height: "43px",
        fontWeight: '600 !important',
        border: "1px solid #8DCBFE !important",
        marginTop: "15px !important",
    },
    divider: {
        backgroundColor: "#C4C4C4 !important",
        opacity: "0.2 !important"
    },
    paymentCards: {
        height: "220px",
        background: ' #FFFFFF',
        borderRadius: '12px !important',
        boxShadow: ' 0 0px 1px rgb(0 0 0 / 40%), 0 10px 16px #ddd !important',
    },
    CardsTxt: {
        color: '#1A1F36 !important',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600 !important',
    },
    cardPay: {
        color: '#A2A3A5 !important',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        marginTop: "10px !important",
    },
})
export const Styles = (theme: any) => ({
    container: {
        margin: "10px 0 !important",
        [theme.breakpoints.down('md')]: {
            marginTop: "30px !important"
        },
    },
    TypoTxt: {
        fontWeight: '700 !important',
        fontSize: "24px !important",
    },
    addBtn: {
        fontWeight: '600 !important',
        border: "1px dashed #A4C7E7 !important",
        background: "#E3F2FF !important",
        color: "#000620 !important",
        width: "100% !important",
        borderRadius:"10px !important"
    },
    ProductCards: {
        background: ' #FFFFFF',
        borderRadius: '15px !important',
        boxShadow: ' 0 0px 1px rgb(0 0 0 / 40%), 0 10px 16px #ddd !important',
    },
    orderText: {
        lineHeight: "40px !important",
        color: " #A2A3A5",
    },
    rate: {
        color: " #1C97FD",
        fontWeight: '600 !important',
    },
    Editbtn: {
        color: "#A2A3A5 !important",
        backgroundColor: '#F2F2F2 !important',
        fontFamily: 'Inter ',
        fontStyle: 'normal ',
        width: "150px",
        height: "43px",
        fontWeight: '600 !important',
        
        marginTop: "15px !important",
        '&:hover': {
            backgroundColor: '#1C97FD !important',
            color: '#FFFFFF !important',
        },
    },

})
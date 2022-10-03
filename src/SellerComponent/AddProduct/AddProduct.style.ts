
export const Styles = (theme: any) => ({
	saveBtn: {

		margin: "20px 0 !important",
		[`& button`]: {
			minWidth: "100% !important",
		},

	},
    drag:{
        width: "100%",
        marginBottom: '10px !important',
        
        marginLeft: '-7px !important',
    },
    input: {
        width: "100%",
        marginBottom: '10px !important',
        backgroundColor: "#E3F2FF",
        marginLeft: '-7px !important',
    },
    dialog: {
        maxHeight: '705px !important',
        maxWidth: '410px !important',
        margin: 'auto !important',
        [theme.breakpoints.down('md')]: {
            maxWidth: '370px !important',
        },
      },
})
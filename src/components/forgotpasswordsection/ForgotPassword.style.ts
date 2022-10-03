import theme from '../../Theme/Theme';
export const Style : any = {
 
    ContanierButton: {
		marginTop: "10px !important",
		width:'100%',
		[`& button`]: {
			minWidth: "100% !important",
            [theme.breakpoints.down('xs')]: {
                width:"100% ! important",
               },

		},
	},
}
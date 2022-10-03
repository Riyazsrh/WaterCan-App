import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    appbar:{
        backgroundColor:'white !important',
        
    },
    box:{
        display:'flex',
        alignItems:'center', 
        justifyContent:'space-between',
        width:'100%'
    },
    menuIcon:{
        color: '#1C97FD',
        padding: '2px',
        fontSize:"30px!important",
        marginRight:'5px',
        marginLeft:'5px',
    },
    menuIconBtn:{
        marginRight:"55px!important",
    },
    menuText:{
        color: 'black', 
        fontSize:'22px!important',  
               
    },
    loginBtn:{
        backgroundColor:'#1C97FD', 
        padding: '20px',
        textAlign: 'center'
    },
    loginText:{
        color:'#fff', 
        fontSize:'20px'
    },
    textContent3: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		flexDirection: "row",
    },
    imgContent: {
        marginLeft: "30px",
        marginRight:"10px"
	},
    
});
import { makeStyles } from "@mui/styles";
import theme from "../../../Theme/Theme";

export const useStyles = makeStyles({
    map: {
        width: '100%',
        height: '300px',
        margin:'auto',
        borderRadius:"10px",
        [theme.breakpoints.down(600)]: {
         width: '80vw',
        height: '300px',
        },
       
    }
    
})


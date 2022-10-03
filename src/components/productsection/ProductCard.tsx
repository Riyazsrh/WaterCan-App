/** @format */
import { Stack, Typography } from "@mui/material";
import { useStyles } from "./products.style";
import "./productcard.css";
type IProps = {
  ele: any;
};
const ProductCard: React.FC<IProps> = ({ ele }) => {
  const classes = useStyles();
  return (
    <>
      <Stack className="card" id="card">
        <Stack className={classes.cardContent}>
          <Stack classes={classes.imgContainer}>
            <img
              id="imgTag"
              src={ele.imgPath}
              alt={ele.label}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
              }}
            />
          </Stack>
          <Stack>
            <Typography sx={{ color: "#000620", fontSize: "14px !important" }}>
              {ele.label}
            </Typography>
            <Typography className="price">
              {ele.price1}
              <Typography className="price" component="del">
                {ele.price2}
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default ProductCard;

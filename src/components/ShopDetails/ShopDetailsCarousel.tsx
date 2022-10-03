import React, { Component } from "react";
import { CardContent, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import StarIcon from "@mui/icons-material/Star";
import { Styles } from "../shared/customerdetails/customerDetail.styles";
import { shopDataType } from "../../utils/models/interface";
import { withStyles } from "@mui/styles";

interface IProps {
	item: shopDataType;
    classes: any;
}

class ShopDetailsCarousel extends Component<IProps>{
        
    render(): React.ReactNode {
		const { classes, item } = this.props;

    return (
        <div>
            <CardContent>
                <Typography className={classes.shopName} variant="h5">
                    {item.shopName}
                </Typography>
                <Stack className={classes.locationSec} sx={{ flexDirection: "row" }}>
                    <Stack
                        className={classes.locationSecInner}
                        sx={{ flexDirection: "row" }}>
                        <Typography component="span" className={classes.distance}>
                            <LocationOnIcon className={classes.icons} />
                            {item.distance}
                        </Typography>
                        <Typography component="span" className={classes.time}>
                            <AccessTimeFilledIcon className={classes.icons} />
                            {item.time}
                        </Typography>
                    </Stack>
                    <Typography component="span" className={classes.star}>
                        <StarIcon className={classes.starIcon} />
                        <StarIcon className={classes.starIcon} />
                        <StarIcon className={classes.starIcon} />
                        <StarIcon className={classes.starIcon} />
                        <StarIcon className={classes.starIcon} />
                    </Typography>
                </Stack>
                <Typography
                    variant="body2"
                    className={classes.address}
                    component="span">
                    {item.address}
                </Typography>
            </CardContent>
        </div>
    )
}
}

export default withStyles(Styles)(ShopDetailsCarousel);
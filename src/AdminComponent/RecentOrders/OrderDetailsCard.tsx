import { Button, Card, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { orderRecentProps } from '../../utils/models/interface';
import { withStyles } from "@mui/styles";
import { Styles } from '../../SellerComponent/Dashboard/DashboardStyle';
import { Link } from 'react-router-dom';


interface IProps {
	classes?: any;
	order: orderRecentProps;
}

export class OrderDetailsCard extends Component<IProps> {
  render(): React.ReactNode {
    const {classes, order} = this.props
    return (
        <Card variant="outlined" sx={{borderRadius: '15px', m:1.5}} className={classes.cardStyle}>
        <Grid container alignItems="center">
            {/* For order image */}
            <Grid item lg={3} md={6} xs={12} sm={12}>
                <img
                    className={classes.orderImage}
                    src={order.img}
                    alt="order"
                />
            </Grid>
            {/* For order description */}
            <Grid item lg={6} md={6} xs={12} sm={12}>
                <Typography variant="h3">{order.heading}</Typography>
                <Box sx={{ display: "flex", margin: "1rem 0" }}>
                    <Typography
                        sx={{
                            marginRight: "2rem",
                            fontWeight: "600 ",
                        }}>
                        <LocationOnIcon
                            className={classes.locationIconStyle}
                            color="primary"
                        />
                        {order.distance}
                    </Typography>
                    <Typography className={classes.fontWeight600}>
                        {order.cost}
                    </Typography>
                </Box>
                <Typography className={classes.addressColor}>
                    {order.address}
                </Typography>
            </Grid>
            {/* For Order Buttons */}
            <Grid item lg={3} md={12} xs={12} sm={12}>
                <Stack className={classes.btnSec}>
                    <Link to="/recentOrderDetails">
                        <Button disableRipple variant="text">
                            More Details
                        </Button>
                    </Link>
                </Stack>
            </Grid>
        </Grid>
    </Card>
    )
  }
}

export default withStyles(Styles)(OrderDetailsCard)

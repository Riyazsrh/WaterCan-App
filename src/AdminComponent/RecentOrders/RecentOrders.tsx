import { Grid, Stack, Typography } from '@mui/material'
import { withStyles } from '@mui/styles';
import React, { Component } from 'react'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import { Styles } from '../../SellerComponent/Dashboard/DashboardStyle';
import { orderRecentDetails } from '../../utils/data/dashboardData';
import { AdminMenus, sellerMenus } from '../../utils/data/SidebarMenu';
import { orderRecentProps } from '../../utils/models/interface';
import CustomHeaders from '../../components/shared/customerheader/CustomerHeader';
import OrderDetailsCard from './OrderDetailsCard';


interface IProps {
    classes?: any;
}
interface DataInterface {
    orderRecentDetails: orderRecentProps;
}
class RecentOrders extends Component<IProps, DataInterface> {
    render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <div
                style={{
                    width: "100%",
                    margin: "auto",
                }}>
                <Grid container>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Header menus={AdminMenus} login="false" customer={false} />
                        <Sidebar menus={AdminMenus} customer="true" />
                    </Grid>

                    <Grid
                        item
                        container
                        lg={9}
                        md={8}
                        sm={12}
                        xs={12}
                        justifyContent="space-evenly">
                        {/* Grid item for App Bar */}
                        <Grid item lg={9} md={8} sm={12} xs={12}>
                            <Stack sx={{ marginBottom: "35px" }}>
                                <CustomHeaders customer={false} />
                            </Stack>
                        </Grid>

                        <Grid lg={11.5} md={9.5} sm={12} xs={12} spacing={4}>
                            {orderRecentDetails.map((order) => {
                                return (
                                    <Grid
                                        item
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                        key={order.id}>
                                        <OrderDetailsCard order={order} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(Styles)(RecentOrders)

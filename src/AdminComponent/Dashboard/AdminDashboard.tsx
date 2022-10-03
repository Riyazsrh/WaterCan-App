import { Box, Button, Card, Divider, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { Component } from 'react';
import CommonSidebarHeader from '../../components/shared/commonSidebarHeader/CommonSidebarHeader';
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { Link } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { Styles } from "./AdminDasboardStyle";
import "./AdminDashboard.css";
import { admincardData, salesman, waterCanShop, orderRecent, orderHistoryData } from '../../utils/data/dashboardData';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CButton from '../../components/shared/commonButton/CButton';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { orderRecentProps } from '../../utils/models/interface';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CButton2 from '../../components/shared/commonButton/CButton2';
import AdRecentOrderCard from '../RecentOrders/AdRecentOrderCard';
import AdOrderHistoryList from '../OrderHistory/AdOrderHistoryList';
import FooterBottom from '../../components/footer/footerBottom/FooterBottom';
import { AdminMenus } from "../../utils/data/SidebarMenu";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import CustomerHeader from '../../components/shared/customerheader/CustomerHeader';


interface IProps {
    classes?: any;
}
interface DataInterface {
    orderRecent: orderRecentProps;
}
class AdminDashboard extends Component<IProps, DataInterface> {
    data: any = {
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
        ],
        datasets: [
            {
                data: [
                    3000, 3800, 4500, 4100, 4400, 4000, 3600, 3300, 4100, 5200, 4200,
                    4600, 4900, 4100, 4500, 4700, 3500, 2800, 3400, 4300, 4900, 4400,
                    4600, 4200, 4000, 3900, 4600, 4200, 4100,
                ],
                label: "₹",
                fill: true,
                backgroundColor: "#D1EAFE",
                borderColor: "#1C97FD",
                lineTension: 0.8,
            },
        ],
    };

    options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    revenue(arr: any) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(arr, "revenue func");

        return sum;
    }
    render(): React.ReactNode {
        const { classes } = this.props;
        return (
            <>
                {/* <CommonSidebarHeader customer={false} /> */}
                <div style={{
                    width: "100%",
                    margin: "auto",
                }}
                >
                    <Grid container>
                        <Grid lg={3} md={4}>
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

                            <Stack sx={{ marginBottom: "20px" }} id="dashboard">
                                <CustomerHeader customer={false} />
                            </Stack>
                            <Grid container sx={{ padding: "0 1.5rem" }}>
                                {/* Dashboard graph */}
                                <Grid
                                    sx={{ marginTop: "30px" }}
                                    item
                                    lg={12}
                                    md={20}
                                    sm={20}
                                    xs={20}
                                    className="scroll">
                                    <Paper sx={{ marginTop: "30px" }}>
                                        <Box
                                            className={classes.earningBox}
                                        >
                                            <Typography
                                                sx={{ fontSize: "22px !important" }}
                                                className={classes.fontWeight600}
                                            >
                                                Earning
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Typography
                                                    sx={{ fontSize: "20px !important", marginRight: { md: "10px", lg: "10px" } }}
                                                    className={classes.boxText}
                                                >
                                                    <span style={{ color: "#A2A3A5" }}>
                                                        May Revenue
                                                    </span>{" "}
                                                    ₹{this.revenue(this.data.datasets[0].data)}
                                                </Typography>
                                                <Box sx={{ display: { sm: 'none', xs: 'none', lg: 'flex', md: 'flex' } }}>
                                                    <CButton2 title="Month" icon={<ArrowDropDownIcon />} />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="graphWrapper">
                                            <Line
                                                className="graph"
                                                options={this.options}
                                                data={this.data}
                                            />
                                        </Box>
                                    </Paper>
                                </Grid>
                                {/* Grid for cards */}
                                <Grid
                                    item
                                    container
                                    spacing={2}
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    sx={{ marginTop: "20px" }}>
                                    {admincardData.map((card: any) => {
                                        return (
                                            <Grid item lg={3} md={6} sm={6} xs={12}>
                                                <Card className={classes.detailCard}>
                                                    <Box className={classes.flexCenter}>
                                                        <Box>
                                                            <img src={card.img} alt="carBottle" />
                                                        </Box>
                                                        <Box>
                                                            <Typography className={classes.cardHeading}>
                                                                {card.heading}
                                                            </Typography>
                                                            <Typography
                                                                className={classes.fontWeight600}>
                                                                {card.value}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                                {/* Grid for ratings box sections */}
                                <Grid container columnSpacing={4}
                                    sx={{ marginTop: "20px" }}
                                    id="shop"
                                >
                                    <Grid item lg={8} md={7} xs={12} sm={12} >
                                        <Card
                                            className={classes.adminShopCard}
                                            sx={{ padding: "1.2rem" }}>
                                            <Grid
                                                rowSpacing={3}
                                                container
                                                lg={12}
                                                md={12}
                                                xs={12}
                                                sm={12}
                                                sx={{ px: 1 }}
                                            >
                                                <Typography sx={{
                                                    fontSize: '24px !important',
                                                    fontWeight: 600,
                                                    marginTop: "20px",
                                                }}>
                                                    Top Watercan Shop
                                                </Typography>
                                                {waterCanShop.map((shop: any) => {
                                                    return (
                                                        <>
                                                            <Grid
                                                                item
                                                                // rowSpacing={3}
                                                                container
                                                                alignItems="center"
                                                                lg={12}
                                                                md={12}
                                                                xs={12}
                                                                sm={12}
                                                                sx={{
                                                                    justifyContent: {
                                                                        lg: 'flex-start', md: "space-between",
                                                                        sm: 'space-between',
                                                                        xs: 'space-between'
                                                                    }
                                                                }}
                                                            >
                                                                <Grid
                                                                    item lg={2} md={2} sm={2} xs={2}
                                                                >
                                                                    <img
                                                                        className={classes.shopimg}
                                                                        src={shop.img}
                                                                        alt="shop image"
                                                                    />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    lg={8}
                                                                    md={8}
                                                                    sm={8}
                                                                    xs={8}
                                                                >
                                                                    <Box>
                                                                        <Typography
                                                                            sx={{
                                                                                fontSize: { lg: "22px !important", sm: '16px', xs: '16px' },
                                                                                // marginLeft: "4px",
                                                                                // marginTop: "20px",
                                                                            }}
                                                                            className={classes.fontWeight600}>
                                                                            {shop.name}
                                                                        </Typography>
                                                                        <Box
                                                                            sx={{
                                                                                display: { md: "block", lg: "flex", sm: 'block', xs: 'block' },
                                                                            }}>
                                                                            <Typography
                                                                                className={classes.fontWeight600}>
                                                                                <LocationOnIcon
                                                                                    className={
                                                                                        classes.locationIconStyle
                                                                                    }
                                                                                    color="primary"
                                                                                />
                                                                                {shop.distance}
                                                                            </Typography>
                                                                            <Typography
                                                                                className={classes.fontWeight600}
                                                                                sx={{
                                                                                    marginLeft: "20px",
                                                                                    display: { lg: 'flex', md: 'none', sm: 'none', xs: 'none' }
                                                                                }}>
                                                                                <AccessTimeFilledIcon
                                                                                    className={
                                                                                        classes.locationIconStyle
                                                                                    }
                                                                                    color="primary"
                                                                                />
                                                                                Time: {shop.time}
                                                                            </Typography>
                                                                            <Typography
                                                                                sx={{ marginLeft: "20px" }}>
                                                                                {shop.rating}
                                                                            </Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                            <Divider variant="middle"
                                                                sx={{
                                                                    borderColor: "#D6DCF3", height: '2px', width: '90%',
                                                                    opacity: "0.5", textAlign: 'center', padding: '5px'
                                                                }}
                                                            />
                                                        </>
                                                    );
                                                })}
                                            </Grid>
                                            <Link to="/admin/shop">
                                            <Box
                                                sx={{
                                                    textAlign: "center",
                                                    margin: "2rem 0 2rem 0",
                                                }}>
                                                <CButton title="View All Shops" />
                                            </Box>
                                            </Link>
                                        </Card>
                                    </Grid>
                                    <Grid item lg={4} md={5} xs={12} sm={12}
                                    id="deliveryMan"
                                        sx={{ marginTop: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}
                                     >
                                        <Card
                                            className={classes.adminSalesmanCard}
                                            sx={{ padding: "1.2rem" }}>
                                            <Grid
                                                rowSpacing={3}
                                                container
                                                lg={12}
                                                md={12}
                                                xs={12}
                                                sm={12}>
                                                <Typography sx={{
                                                    fontSize: '24px !important',
                                                    fontWeight: 600,
                                                    marginTop: "20px",
                                                }}>
                                                    Delivery Man
                                                </Typography>
                                                {salesman.map((person: any) => {
                                                    return (
                                                        <>
                                                            <Grid
                                                                item
                                                                container
                                                                alignItems="center"
                                                                lg={12}
                                                                md={12}
                                                                xs={12}
                                                                sm={12}
                                                                justifyContent="space-evenly"
                                                                spacing={3}
                                                            >
                                                                <Grid item lg={4} md={5} sm={4} xs={4}>
                                                                    <img
                                                                        className={classes.imgTag1}
                                                                        src={person.img}
                                                                        alt=""
                                                                    />
                                                                </Grid>
                                                                <Grid
                                                                    item
                                                                    lg={8}
                                                                    md={7}
                                                                    sm={8}
                                                                    xs={8}
                                                                    sx={{
                                                                        padding: "4px !important",
                                                                    }}>
                                                                    <Typography
                                                                        sx={{
                                                                            fontSize: "16px !important",
                                                                            marginLeft: "4px",
                                                                            marginTop: "20px",
                                                                        }}
                                                                        className={classes.fontWeight600}>
                                                                        {person.name}
                                                                    </Typography>
                                                                    <Box
                                                                        sx={{
                                                                            display: "flex",
                                                                        }}>
                                                                        <Typography
                                                                            className={classes.fontWeight600}>
                                                                            <LocationOnIcon
                                                                                className={
                                                                                    classes.locationIconStyle
                                                                                }
                                                                                color="primary"
                                                                            />
                                                                            {person.distance}
                                                                        </Typography>
                                                                        <Typography
                                                                            sx={{ marginLeft: "10px" }}>
                                                                            {person.rating}
                                                                        </Typography>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </>
                                                    );
                                                })}

                                            </Grid>
                                            <Box
                                                sx={{
                                                    textAlign: "center",
                                                    margin: "2rem 0 2rem 0",
                                                }}>
                                                <CButton title="Delivery Man" />
                                            </Box>
                                        </Card>
                                    </Grid>
                                </Grid>
                                {/* Grid for Order history section */}
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    id="order-history"

                                >
                                    <Typography
                                    
                                        sx={{
                                            fontSize: "1.5rem !important",
                                            fontWeight: "700 !important",
                                            margin: "1.5rem 0",
                                            borderLeft: "4px solid #1C97FD",
                                            paddingLeft: "1.2rem",
                                        }}>
                                        Order History
                                    </Typography>
                                    <Grid item
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        xs={12}
                                    >
                                        {orderHistoryData.map((order: any) => {
                                            return (
                                                <Stack key={order.id}>
                                                    <AdOrderHistoryList elem={order} />
                                                </Stack>
                                            );
                                        })}
                                         <Link to="/admin/order-history">
                                        <Box
                                            sx={{
                                                textAlign: "center",
                                                margin: "2rem 0 4rem 0",
                                            }}>
                                            <CButton title=" View All Order History" />
                                        </Box>
                                    </Link>
                                    </Grid>
                                </Grid>
                                {/* Grid for recent Orders */}
                                <Grid
                                    item
                                    lg={12}
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    id="orders">
                                    <Typography
                                        sx={{
                                            fontSize: "1.5rem !important",
                                            fontWeight: "700 !important",
                                            margin: "1.5rem 0",
                                            borderLeft: "4px solid #1C97FD",
                                            paddingLeft: "1.2rem",
                                        }} >
                                        Recent Orders
                                    </Typography>
                                    {/* <Link to="/recentOrderDetails"> */}
                                    <Grid container>
                                        {orderRecent.map((order: orderRecentProps) => {
                                            return (
                                                <Grid
                                                    item
                                                    lg={12}
                                                    md={12}
                                                    sm={12}
                                                    xs={12}
                                                    key={order.heading}>
                                                    <AdRecentOrderCard order={order} />
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                    {/* </Link> */}
                                    <Link to="/admin/orders">
                                        <Box
                                            sx={{
                                                textAlign: "center",
                                                margin: "2rem 0 4rem 0",
                                            }}>
                                            <CButton title=" View All Recent Orders" />
                                        </Box>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <FooterBottom />
                </div>
            </>
        );
    }
}

export default withStyles(Styles)(AdminDashboard);
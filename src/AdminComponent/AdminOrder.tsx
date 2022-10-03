/** @format */

import React, { Component } from "react";
import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Sidebar from "../components/sidebar/Sidebar";
import { AdminMenus } from "../utils/data/SidebarMenu";
import CustomerHeader from "../components/shared/customerheader/CustomerHeader";
import SearchBar from "material-ui-search-bar";
import { shopDetails } from "../utils/data/AdminOrderData";
import { Style } from "./AdminOrderStyle";
import { withStyles } from "@mui/styles";
import Header from "../components/header/Header";

interface IProps {
    classes?: any;
}

class AdminOrder extends Component<IProps> {

    state = {
        searched: "",
    }

    onChangeHandle = (searched: any) => {
        this.setState({ searched });
    }

    render() {

        const toSearch = (searched: any) => (item: any) =>
            item.id.toLowerCase().includes(searched.toLowerCase());

        const { classes } = this.props;
        return (
            <div
                style={{
                    width: "100%",
                    margin: "auto",
                }}
                id="Home">
                <Grid container>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                        <Header menus={AdminMenus} login="false" customer={false} />
                        <Sidebar menus={AdminMenus} customer="true" />
                    </Grid>
                    <Grid item lg={9} md={8} sm={12} xs={12}>
                        <Stack sx={{ marginBottom: "20px" }}>
                            <CustomerHeader customer={false} />
                        </Stack>

                        <Grid container>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Grid container >
                                    <Grid item lg={6} md={6} sm={6} xs={4}>
                                        <Typography
                                            sx={{
                                                fontSize: "1.5rem !important",
                                                fontWeight: "700 !important",
                                                margin: "1.5rem 0",
                                                paddingLeft: "1.2rem",
                                            }}>
                                            Today
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={8}>
                                        <SearchBar
                                        value={this.state.searched}
										onChange={this.onChangeHandle}
                                            style={{
                                                margin: "20px auto",
                                                width: '100%',
                                                marginTop: '20px',
                                                marginRight: '50px',
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        <>
                            {
                                shopDetails
                                .filter(toSearch(this.state.searched))
                                .map((data: any, index: any) => (
                                    <>
                                        <Grid container sx={{ marginTop: '20px' }}>
                                            <Grid item lg={7} xs={12}>
                                                <Grid container>
                                                    <Grid item lg={2} xs={4} sx={{ textAlign: 'center' }}><Box className={classes.image}>
                                                        <img src={data.image} alt="carBottle" />
                                                    </Box></Grid>
                                                    <Grid item lg={10} xs={8}>
                                                        <Grid container>
                                                            <Grid item lg={4} xs={7} sx={{ textAlign: 'center' }}><Typography sx={{ fontSize: '22px !important' }} className={classes.id}>{data.id}</Typography></Grid>
                                                            <Grid item lg={3.5} xs={6} sx={{ textAlign: 'center' }}><Typography sx={{ fontSize: '17px !important' }} className={classes.time}>{data.time}</Typography></Grid>
                                                            <Grid item lg={1} sx={{ textAlign: 'center' }} ><Typography className={classes.line}></Typography></Grid>
                                                            <Grid item lg={3.5} xs={4} sx={{ textAlign: 'center' }}><Typography sx={
                                                                data.value
                                                                    ? {
                                                                        fontSize: "17px !important",
                                                                        color: "rgba(0, 188, 0, 1)",
                                                                    }
                                                                    : {
                                                                        fontSize: "17px !important",
                                                                        color: "rgba(255, 0, 0, 1)",
                                                                    }
                                                            } className={classes.delivered}>{data.deliveredStatus}</Typography></Grid>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>
                                            </Grid>
                                            <Grid item lg={5} xs={12}>
                                                <Grid container>
                                                    <Grid item lg={9} xs={9} sx={{}}><Typography sx={{ fontSize: '17px !important', marginLeft: '10px' }} className={classes.address}>{data.address}</Typography></Grid>
                                                    <Grid item lg={3} xs={3} sx={{ textAlign: 'center' }}><Typography sx={{ fontSize: '18px !important' }} className={classes.Rs}>₹{data.Rs}</Typography></Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Divider sx={{ marginTop: '20px', marginBottom: '20px' }}></Divider>{" "}
                                    </>
                                ))
                            }
                        </>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default withStyles(Style)(AdminOrder);

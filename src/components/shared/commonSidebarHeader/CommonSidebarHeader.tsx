/** @format */

import { Grid, Stack } from "@mui/material";
import React, { Component } from "react";
import Header from "../../header/Header";
import CustomerHeader from "../customerheader/CustomerHeader";
import Sidebar from "../../sidebar/Sidebar";
import { customerMenus, sellerMenus } from "../../../utils/data/SidebarMenu";


interface IProps {
  customer: boolean;
}

export default class CommonSidebarHeader extends Component<IProps> {
  render() {
    return (
      <>
        {this.props.customer === true ? (
          <div
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <Grid container>
              <Grid item lg={3} md={4} sm={12} xs={12}>
                <Header menus={customerMenus} login="false" customer={true} />
                <Sidebar menus={customerMenus} customer="true" />
              </Grid>

              <Grid
                item
                container
                lg={9}
                md={8}
                sm={12}
                xs={12}
                justifyContent="space-evenly"
              >
                {/* Grid item for App Bar */}
                <Grid item lg={9} md={8} sm={12} xs={12} id="Dashboard">
                  <Stack sx={{ marginBottom: "20px" }}>
                    <CustomerHeader customer={true} />
                   
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <Grid container>
              <Grid item lg={3} md={4} sm={12} xs={12}>
                {/* <Header
									menus={sellerMenus}
									login="false"
									customer={false}
								/>
								<Sidebar menus={sellerMenus} customer="false" /> */}
                <Header menus={sellerMenus} login="false" customer={false} />
                <Sidebar menus={sellerMenus} customer="true" />
              </Grid>

              <Grid
                item
                container
                lg={9}
                md={8}
                sm={12}
                xs={12}
                justifyContent="space-evenly"
              >
                {/* Grid item for App Bar */}
                <Grid item lg={9} md={8} sm={12} xs={12} id="Dashboard">
                  <Stack sx={{ marginBottom: "20px" }}>
                    <CustomerHeader customer={false} />
                  
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )}
       
      </>
    );
  }
}

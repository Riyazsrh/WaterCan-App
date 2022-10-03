import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import FooterBottom from "../../components/footer/footerBottom/FooterBottom";
import Paginate from "../../components/Pagination/Paginate";

import SimpleSlider from "../../components/shared/CarouselBanner";
import CommonSidebarHeader from "../../components/shared/commonSidebarHeader/CommonSidebarHeader";
import Title from "../../components/shared/title/Title";
import { Styles } from "../../pages/customers/shopNearbyCart/shopcart.styles";
import ShopNearbyCart from "../../pages/customers/shopNearbyCart/ShopNearbyCart";
import { shopDetails } from "../../utils/data/ShopNearbyData";
import { withStyles } from "@mui/styles";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { AdminMenus } from "../../utils/data/SidebarMenu";
import CustomerHeader from "../../components/shared/customerheader/CustomerHeader";
type IProps = {
  classes: any;
};

class Shop extends Component<IProps> {
  render(): React.ReactNode {
    const { classes } = this.props
    return (
      <>
        {/* <CommonSidebarHeader customer={false} /> */}
        <div
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          <Grid container>
            <Grid item lg={3} md={4} sm={12} xs={12}>
              <Header menus={AdminMenus} login="false" customer={false} />
              <Sidebar menus={AdminMenus} customer="true" />
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12}>
              <Stack sx={{ marginBottom: "20px" }}>
                <CustomerHeader customer={false} />
              </Stack>
              <Container maxWidth={false}>
                <Stack id="ShopNearby">
                  <Title title="Shop Nearby" />
                  <Stack>
                    {shopDetails.map((item) => (
                      <ShopNearbyCart key={item.id} item={item} />
                    ))}
                  </Stack>
                  <Stack
                    sx={{
                      //   alignItems: "flex-end",
                      alignItems: { xs: "center", lg: "flex-end" },
                      padding: "20px 0 !important",
                    }}
                  >
                    <Paginate count={10} />
                  </Stack>
                </Stack>
              </Container>
              <FooterBottom />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(Styles)(Shop);

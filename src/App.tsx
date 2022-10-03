/** @format */

import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/Theme";
import Home from "./components/SidebarL/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/customers/CustomerPage";
import Login from "./pages/Login/Login";
import SingleProductPage from "./pages/customers/SingleProductPage/SingleProductPage";
import ShopDetailPage from "./components/ShopDetails/ShopDetailPage";
import Register from "./pages/Register/Register";
import Notification from "./pages/Notification/Notification";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/customers/orderDetails/Order";
import TrackOrder from "./pages/TrackOrder/TrackOrder";
import FavoritePage from "./components/favoritesection/FavoritePage";
import PaymentPage from "./components/paymentsection/PaymentPage";
import Address from "./components/Address/Carts";
import OrderDetails from "./components/OrderDetails/PymentCards";
import Dashboard from "./SellerComponent/Dashboard/Dashboard";
import PrivacyMobile from "./pages/privacyAndTermMobile/PrivacyMobile";
import TermsAndConditions from "./pages/privacyAndTermMobile/TermsMobile";
import DeliveryNearBy from "./pages/sellerPages/DeliveryNearby/DeliveryNearBy";
import DeliveryBoyReviews from "./pages/sellerPages/DeliveryBoyReviews/DeliveryBoyReviews";
import OrderHistory from "./SellerComponent/OrderHistory/OrderHistory";
import RecentOrderDetail from "./components/OrderDetails/SellerFlow/RecentOrderDetail";
import Product from "./SellerComponent/Products/Product";
import RecentOrder from "./SellerComponent/RecentOrder/RecentOrder";
import AdminOrder from "./AdminComponent/AdminOrder";
import AdminDashboard from "./AdminComponent/Dashboard/AdminDashboard";
import Shop from "./AdminComponent/Shop/Shop";
import RecentOrders from "./AdminComponent/RecentOrders/RecentOrders";
import AdminLogin from "./AdminComponent/AdminLogin/AdminLogin";



function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="customers" element={<CustomerPage />} />
					<Route path="account-login" element={<Login />} />
					<Route path="shop-details" element={<ShopDetailPage />} />
					<Route path="single-product-page" element={<SingleProductPage />} />
					<Route path="account-login/register" element={<Register />} />
					<Route path="Notification" element={<Notification />} />
					<Route path="cart" element={<Cart />} />
					<Route path="myorders" element={<Order />} />
					<Route path="trackorder" element={<TrackOrder />} />
					<Route path="FavoritePage" element={<FavoritePage />} />
					<Route path="PaymentPage" element={<PaymentPage />} />
					<Route path="address" element={<Address />} />
					<Route path="orderDetails" element={<OrderDetails />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="privacyPolicy" element={<PrivacyMobile />} />
					<Route path="orderhistory" element={<OrderHistory />} />
					<Route path="products" element={<Product />} />
					<Route path="terms&conditions" element={<TermsAndConditions />} />
					<Route path="/deliveryNearBy" element={<DeliveryNearBy />} />
					<Route path="reviews" element={<DeliveryBoyReviews />} />
					<Route path="recentorders" element={<RecentOrder />} />
					<Route path="recentOrderDetails" element={<RecentOrderDetail />} />

					<Route path="admin/order-history" element={<AdminOrder />} />
					<Route path="admin/dashboard" element={<AdminDashboard />} />
					<Route path="admin/shop" element={<Shop />} />
					<Route path="admin/orders" element={<RecentOrders />} />
					<Route path="admin/Login" element={<AdminLogin />} />

				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;

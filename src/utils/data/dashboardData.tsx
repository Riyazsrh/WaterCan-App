/** @format */

import man from "../../assets/images/Seller/man.png";
import cardBottle from "../../assets/images/Seller/cardBottle.png";
import money from "../../assets/images/Seller/money.png";
import bag from "../../assets/images/Seller/bag.png";
import dashboardOrder1 from "../../assets/images/Seller/dashboardOrder1.png";
import dashboardOrder3 from "../../assets/images/Seller/dashboardOrder3.png";
import dashboardOrder2 from "../../assets/images/Seller/dashboardOrder2.png"
import salesImage from "../../assets/images/Seller/salesman.png";
import salesImage2 from "../../assets/images/Seller/salesman2.png";
import salesImage3 from "../../assets/images/Seller/salesman3.png";
import salesImage4 from "../../assets/images/Seller/salesman4.png";
import salesImage5 from "../../assets/images/Seller/salesman5.png";
import StarIcons from "../../components/shared/starIcons/StarIcons";
import ShopIcon from "../../assets/images/Seller/shopping-bag1.png";
import DeliveryBoy from "../../assets/images/Seller/delivery-boy.png";
import Shop1 from "../../assets/images/shopNearbyImg/shopNearbyImg1.jpg";
import Shop2 from "../../assets/images/shopNearbyImg/shopNearbyImg2.png";
import Shop3 from "../../assets/images/shopNearbyImg/shopNearbyImg3.png";
import Shop4 from "../../assets/images/shopNearbyImg/shopNearbyImg4.png";
import Shop5 from "../../assets/images/shopNearbyImg/shopNearbyImg7.png";
import {
	orderHistoryProps,
	orderRecentProps,
	salesmanData,
	waterCanShopData,
} from "../models/interface";

export const cardData = [
	{
		img: cardBottle,
		heading: "Recent Order",
		value: 30,
	},
	{
		img: money,
		heading: "May revenue",
		value: 44620.0,
	},
	{
		img: man,
		heading: "New Customer",
		value: 36,
	},
	{
		img: bag,
		heading: "Completed Order",
		value: 620,
	},
];

// admin dashboard card data
export const admincardData = [
	{
		img: cardBottle,
		heading: "Recent Order",
		value: 30,
	},
	{
		img: money,
		heading: "May revenue",
		value: "₹44620.0",
	},
	{
		img: man,
		heading: "New Customer",
		value: 36,
	},
	{
		img: bag,
		heading: "Completed Order",
		value: 620,
	},
	{
		img: ShopIcon,
		heading: "Total Shops",
		value: 90,
	},
	{
		img: DeliveryBoy,
		heading: "Delivery Man",
		value: 65,
	},
];

export const orderRecent: orderRecentProps[] = [
	{
		id: "#ORD00001",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "#ORD00002",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "#ORD00003",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
];

export const orderRecentDetails: orderRecentProps[] = [
	{
		id: "1",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "2",
		img: dashboardOrder2,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "3",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "4",
		img: dashboardOrder3,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "5",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "6",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "7",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
	{
		id: "8",
		img: dashboardOrder1,
		heading: "Watercan 25L",
		distance: "1.1km",
		cost: "₹480.00",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
	},
];

export const orderHistoryData: orderHistoryProps[] = [
	{
		id: "1",
		img: dashboardOrder1,
		orderNo: "#2597640001",
		time: "12:31 pm",
		status: "Delivered",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
		cost: "150",
	},
	{
		id: "2",
		img: dashboardOrder1,
		orderNo: "#2597640002",
		time: "12:31 pm",
		status: "Delivered",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
		cost: "150",
	},
	{
		id: "3",
		img: dashboardOrder1,
		orderNo: "#2597640003",
		time: "12:31 pm",
		status: "Delivered",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
		cost: "150",
	},
	{
		id: "4",
		img: dashboardOrder1,
		orderNo: "#2597640004",
		time: "12:31 pm",
		status: "Delivered",
		address:
			"Address: Rani durgawati chowk, 17, behind the puspanjali hall, Nagpur, Maharashtra 440017",
		cost: "150",
	},
];

export const salesman: salesmanData[] = [
	{
		id: "1",
		img: salesImage,
		name: "kiran kumar",
		distance: "1.1km",
		rating: <StarIcons />,
	},
	{
		id: "2",
		img: salesImage2,
		name: "Mohan Lal Singh",
		distance: "1.1km",
		rating: <StarIcons />,
	},
	{
		id: "3",
		img: salesImage3,
		name: "Pratik Singh",
		distance: "1.1km",
		rating: <StarIcons />,
	},
	{
		id: "4",
		img: salesImage4,
		name: "Pranay khan",
		distance: "1.1km",
		rating: <StarIcons />,
	},
	{
		id: "5",
		img: salesImage5,
		name: "Mohan Joshi",
		distance: "1.1km",
		rating: <StarIcons />,
	},
];

export const waterCanShop: waterCanShopData[] = [
	{
		id: "1",
		img: Shop1,
		name: "Shyamsheel Aqua Cool Water",
		distance: "1.1km",
		time: "24 h available",
		rating: <StarIcons />,
	},
	{
		id: "2",
		img: Shop2,
		name: "Shyamsheel Aqua Cool Water",
		distance: "1.1km",
		time: "24 h available",
		rating: <StarIcons />,
	},
	{
		id: "3",
		img: Shop3,
		name: "Shyamsheel Aqua Cool Water",
		distance: "1.1km",
		time: "24 h available",
		rating: <StarIcons />,
	},
	{
		id: "4",
		img: Shop4,
		name: "Shyamsheel Aqua Cool Water",
		distance: "1.1km",
		time: "24 h available",
		rating: <StarIcons />,
	},
	{
		id: "5",
		img: Shop5,
		name: "Shyamsheel Aqua Cool Water",
		distance: "1.1km",
		time: "24 h available",
		rating: <StarIcons />,
	},
];
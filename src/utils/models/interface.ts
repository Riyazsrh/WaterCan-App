import React from "react";

export interface DataType {
    id: string;
    para1: string;
    para2: string;
    name: string;
}
export interface titleProps {
    title: string
}

export interface shopDataType {
    id: string;
    shopName: string;
    distance: string;
    time: string;
    address: string;
	image: string
}
export interface salesmanData {
    id: string;
    img: string;
    name: string;
    distance: string;
    rating: React.ReactNode
}
export interface bankProps {
    id: string;
    name: string
}
export interface ReviewProps {
    id: string;
    name: string;
    img: string;
    icons: React.ReactNode;
    comment: string;
    time: string
}
export interface orderRecentProps {
    id: string;
    img: string;
    heading: string;
    distance: string;
    cost: string;
    address:string;
    
}
export interface orderHistoryProps {
    id: string;
    img: string;
    orderNo: string;
    time: string;
    status: string;
    address: string;
	cost: string,
}

export interface waterCanShopData {
    id: string;
    img: string;
    name: string;
    distance: string;
    time: string;
    rating: React.ReactNode
}

export interface adminOrderDataType {
    id: string;
    image: string;
    time: string;
    address: string;
    deliveredStatus: string;
    Rs: string;
    value: boolean;
}
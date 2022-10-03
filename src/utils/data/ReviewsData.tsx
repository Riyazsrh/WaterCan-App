/** @format */

import Review1 from "../../assets/images/ReviewImg/ReviewImg1.png";
import Review2 from "../../assets/images/ReviewImg/ReviewImg2.png";
import Review3 from "../../assets/images/ReviewImg/ReviewImg3.png";
import StarIcons from "../../components/shared/starIcons/StarIcons";
import { ReviewProps } from "../models/interface";

export const ReviewsData: ReviewProps[] = [
	{
		id: "1",
		name: "Abhinash Nayak",
		img: Review1,
		icons: <StarIcons />,
		comment:
			"It is a long established fact that a reader will be distracted by the readable",
		time: "12:31 Pm",
	},
	{
		id: "2",
		name: "Mamta Varni",
		img: Review2,
		icons: <StarIcons />,
		comment: "Good Delivery man",
		time: "12:31 Pm",
	},
	{
		id: "3",
		name: "Vishal Raghav",
		img: Review3,
		icons: <StarIcons />,
		comment:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution",
		time: "12:31 Pm",
	},
];

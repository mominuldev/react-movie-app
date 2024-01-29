import Star from "../../assets/star.svg";

const Rating = ({ rating }) => {
	const stars = Array(rating).fill(Star);
	return (
		<>
			{stars.map((Star, index) => (
				<img key={index} className="w-4 h-4" src={Star} alt="Star" />
			))}
		</>
	);
};

export default Rating;

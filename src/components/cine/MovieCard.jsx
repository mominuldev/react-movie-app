import { useState } from "react";
import { getImgUrl } from "../../utils/cine-utility.js";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal.jsx";

const MovieCard = ({ movie }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedMovie, setSelectedMovie] = useState(null);

	const handleSetMovie = (movie) => {
		setIsModalOpen(true);
		setSelectedMovie(movie);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedMovie(null);
	};

	return (
		<>
			{isModalOpen && (
				<MovieDetailsModal
					movie={selectedMovie}
					closeModal={handleCloseModal}
				/>
			)}

			<a href="#" onClick={() => handleSetMovie(movie)}>
				<figure
					className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
					key={movie.id}
				>
					<img
						className="w-full object-cover"
						src={getImgUrl(movie.cover)}
						alt="Movie Cover"
					/>
					<figcaption className="pt-4">
						<h3 className="text-xl mb-1">{movie.title}</h3>
						<p className="text-[#575A6E] text-sm mb-2">
							{movie.genre}
						</p>
						<div className="flex items-center space-x-1 mb-5">
							<Rating rating={movie.rating} />
						</div>
						<a
							className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
							href="#"
						>
							<img src="./assets/tag.svg" alt="" />
							<span>${movie.price} | Add to Cart</span>
						</a>
					</figcaption>
				</figure>
			</a>
		</>
	);
};

export default MovieCard;

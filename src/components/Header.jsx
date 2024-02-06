import { useState, useContext } from "react";
import logo from "../assets/logo.svg";
import iconRing from "../assets/ring.svg";
import shopingCart from "../assets/shopping-cart.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import CartDetails from "./cine/CartDetails";
import { ThemeContext, MovieContext } from "../context/movieContext";

const Header = () => {
	const [cartModalOpen, setCartModalOpen] = useState(false);
	const { cartData } = useContext(MovieContext);
	const { darkMode, setDarkMode } = useContext(ThemeContext);

	return (
		<>
			{cartModalOpen && (
				<CartDetails
					closeModal={() => setCartModalOpen(false)}
					movie={cartData}
				/>
			)}
			<header>
				<nav className="container flex items-center justify-between space-x-10 py-6">
					<a href="index.html">
						<img src={logo} width="139" height="26" alt="" />
					</a>

					<ul className="flex items-center space-x-5">
						<li>
							<a
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
								href="#"
							>
								<img
									src={iconRing}
									width="24"
									height="24"
									alt=""
								/>
							</a>
						</li>
						<li>
							<a
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
								href="#"
							>
								<img
									src={darkMode ? sun : moon}
									width="24"
									height="24"
									alt="Mood"
								/>
							</a>
						</li>
						<li>
							<a
								className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
								href="#"
								onClick={() => setCartModalOpen(true)}
							>
								<img
									src={shopingCart}
									width="24"
									height="24"
									alt="Shoping Cart"
								/>
								{cartData.length > 0 && (
									<span className="bg-primary text-[#171923] rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold absolute -top-1 -right-1">
										{cartData.length}
									</span>
								)}
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;

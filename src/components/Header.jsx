import logo from "../assets/logo.svg";
import iconRing from "../assets/ring.svg";
import shopingCart from "../assets/shopping-cart.svg";
import moon from "../assets/icons/moon.svg";
import { useState } from "react";
import CartDetails from "./cine/CartDetails";

const Header = () => {
	const [cartModalOpen, setCartModalOpen] = useState(false);

	return (
		<>
			{cartModalOpen && (
				<CartDetails closeModal={() => setCartModalOpen(false)} />
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
									src={moon}
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
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;

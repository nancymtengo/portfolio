import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const closeMenu = () => setIsMenuOpen(false);

	const navItems = [
		{ label: "Home", path: "/", key: "home" },
		{ label: "About", path: "/about", key: "about" },
		{ label: "Experience", path: "/experience", key: "experience" },
		{ label: "Volunteering", path: "/volunteering", key: "volunteering" },
		{ label: "Contact", path: "/contact", key: "contact" },
	];

	return (
		<React.Fragment>
			{/* ── Desktop pill nav ── */}
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							{navItems.map((item) => (
								<li
									key={item.key}
									className={
										active === item.key
											? "nav-item active"
											: "nav-item"
									}
								>
									<Link to={item.path}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>

			{/* ── Mobile: square hamburger button (fixed top-right) ── */}
			<button
				className="nav-hamburger"
				onClick={toggleMenu}
				aria-label="Toggle navigation"
			>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
				<span className="hamburger-line"></span>
			</button>

			{/* ── Mobile: popover menu anchored right ── */}
			{isMenuOpen && (
				<div className="nav-mobile-menu">
					<ul className="nav-mobile-list">
						{navItems.map((item) => (
							<li
								key={item.key}
								className={
									active === item.key
										? "nav-mobile-item active"
										: "nav-mobile-item"
								}
							>
								<Link to={item.path} onClick={closeMenu}>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</React.Fragment>
	);
};

export default NavBar;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/volunteering.css";

const Volunteering = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "volunteering");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Volunteering | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="volunteering" />
				<div className="content-wrapper">
					<div className="volunteering-logo-container">
						<div className="volunteering-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="volunteering-main-container">
						<div className="title volunteering-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle volunteering-subtitle">
							{INFO.articles.description}
						</div>

						<div className="volunteering-list">
							{INFO.volunteering.map((item, index) => (
								<div className="volunteering-item" key={index}>
									<div className="vol-card">
										<div className="vol-card-container">
											{item.logo && (
												<div className="vol-card-logo">
													<img
														src={item.logo}
														alt={item.title}
													/>
												</div>
											)}
											<div className="vol-card-title">
												{item.title}
											</div>
											<div className="vol-card-description">
												{item.description}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Volunteering;

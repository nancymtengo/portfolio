import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experience.css";

const Experience = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [expanded, setExpanded] = useState(new Set());

	const toggleExpand = (index) => {
		setExpanded((prev) => {
			const next = new Set(prev);
			if (next.has(index)) {
				next.delete(index);
			} else {
				next.add(index);
			}
			return next;
		});
	};

	const currentSEO = SEO.find((item) => item.page === "experience");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Experience | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experience" />
				<div className="content-wrapper">
					<div className="experience-logo-container">
						<div className="experience-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="experience-container">
						<div className="title experience-title">
							Building expertise through hands-on legal practice.
						</div>

						<div className="subtitle experience-subtitle">
							A record of my professional experience across legal
							internships and teaching, where I have applied
							academic knowledge to real-world challenges and
							developed practical skills in civil litigation,
							political party compliance, and education.
						</div>

						<div className="experience-list-wrapper">
							<div className="experience-list">
								{INFO.projects.map((item, index) => (
									<div
										className="experience-entry"
										key={index}
									>
										<div
											className="experience-entry-header"
											onClick={() => toggleExpand(index)}
										>
											{item.logo && (
												<a
													href={item.logoLink || "#"}
													target="_blank"
													rel="noreferrer"
													className="experience-entry-logo-link"
													onClick={(e) =>
														e.stopPropagation()
													}
												>
													<img
														src={item.logo}
														alt={item.title}
														className="experience-entry-logo"
													/>
												</a>
											)}
											<div className="experience-entry-meta">
												<div className="experience-entry-title">
													{item.title}
												</div>
												<div className="experience-entry-subtitle">
													{item.subtitle}
													{item.duration && (
														<span className="experience-entry-duration">
															&nbsp;&mdash;&nbsp;
															{item.duration}
														</span>
													)}
												</div>
											</div>
											<FontAwesomeIcon
												icon={
													expanded.has(index)
														? faChevronUp
														: faChevronDown
												}
												className="experience-entry-chevron"
											/>
										</div>
										<div className="experience-entry-description">
											{item.description}
										</div>
										{expanded.has(index) &&
											item.details && (
												<ul className="experience-entry-bullets">
													{item.details.map(
														(bullet, i) => (
															<li key={i}>
																{bullet}
															</li>
														)
													)}
												</ul>
											)}
									</div>
								))}
							</div>
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

export default Experience;

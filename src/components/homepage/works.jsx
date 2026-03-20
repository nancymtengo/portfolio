import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						{INFO.projects.map((work, index) => (
							<div className="work" key={index}>
								<a
									href={work.logoLink || "#"}
									target="_blank"
									rel="noreferrer"
									className="work-logo-link"
								>
									<img
										src={work.logo}
										alt={work.title}
										className="work-image"
									/>
								</a>
								<div className="work-details">
									<div className="work-header">
										<div className="work-title">
											{work.title}
										</div>
										{work.duration && (
											<div className="work-duration">
												{work.duration}
											</div>
										)}
									</div>
									<div className="work-subtitle">
										{work.subtitle}
									</div>
									<div className="work-description">
										{work.description}
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;

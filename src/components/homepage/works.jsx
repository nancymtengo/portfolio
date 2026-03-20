import React, { useState } from "react";
import { faBriefcase, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "../common/card";
import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
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
								<div className="work-info">
									<div
										className="work-header"
										onClick={() => toggleExpand(index)}
									>
										<div className="work-title-group">
											<div className="work-title">
												{work.title}
											</div>
											<div className="work-subtitle">
												{work.subtitle}
											</div>
										</div>
										<div className="work-right">
											{work.duration && (
												<div className="work-duration">
													{work.duration}
												</div>
											)}
											<FontAwesomeIcon
												icon={
													expanded.has(index)
														? faChevronUp
														: faChevronDown
												}
												className="work-expand-icon"
											/>
										</div>
									</div>
									{expanded.has(index) && work.details && (
										<ul className="work-bullets">
											{work.details.map((bullet, i) => (
												<li key={i}>{bullet}</li>
											))}
										</ul>
									)}
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

import React from "react";

function article_1() {
	return {
		date: "20 March 2026",
		title: "Giving back through community service and advocacy.",
		description:
			"A record of my volunteer work, community involvement, and advocacy initiatives.",
		keywords: [
			"Nancy Mtengo",
			"legal advocacy",
			"community service",
			"volunteering",
			"Legal Aid",
			"KMUN",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
			}
			`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						As a law student, I believe that the pursuit of justice
						extends beyond the courtroom. Through my involvement
						with the Kenya Model United Nation (KMUN) and the Legal
						Aid Clinic at Kenyatta University, I have had the
						privilege of translating academic knowledge into tangible
						community impact.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;

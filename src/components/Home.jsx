import React, { Component } from "react";
import "react-dom";

import Navbar from "./Navbar";

import "../css/Home.css";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div id="bgImg">
					<Navbar component={"Home"} />
					{/* <h1 id="title">Amnesty International</h1> */}
					<div id="messageBg">
						<h5 id="fromEditorTitle">From the Editor</h5>
						<p className="fromEditorBody">
							Established in 1961, Amnesty International aims to promote
							universal human rights through reporting on governments and
							non-state actors. Though it’s core principle is to focus on
							prisoners of conscience, including political dissenters, the
							barbed-wire-wrapped candle of the London-based organization is now
							a symbol of human rights activists across the globe. Today,
							Amnesty International mainly deals with women’s, children’s,
							minorities’, and indigenous rights, ending torture, abolishing the
							death penalty, rights of refugees, rights of prisoners of
							conscience, and protection of human dignity.
							<br />
							<br />
							At Upper Canada College, the Amnesty International Club has three
							objectives:
							<br />
							<br />
						</p>

						<div>
							<ol id="objectivesOl">
								<li>
									To raise awareness and educate about humanitarian issues
								</li>
								<li>To promote and encourage action from the community</li>
								<li>
									To create a space for meaningful discussion about human rights
								</li>
							</ol>
						</div>

						<p className="fromEditorBody">
							We believe that to fulfill these objectives, an online publication
							would be integral to the process. We will regularly publish
							articles about humanitarian issues on this website. We hope that
							by reading them, you can gain a better understanding of
							humanitarian crises and affairs around the world. Moreover, we
							encourage you to engage in discussions about our articles. By
							creating an account and signing in, you can comment, and reply to
							other comments, on our articles. We also encourage submissions and
							feedback from the public through the “Contact Us” tab. We hope
							that your voices and opinions can be reflected in our club’s work
							as well. Finally, if you would like to be a part of Amnesty
							International UCC, we meet Mondays and Tuesdays at lunch in Room
							233 (Mon) and 235 (Tues).
							<br />
							<br />
							Special thanks to Ms. Bowker, Ms Hui Bon Hoa, the rest of the
							Amnesty Exec - Shaan, Bassem, Chris, Robbie, and Jeremy, and every
							club member for their dedicated work as a part of our group!
							<br />
							<br /> Also, this website would not be possible without the
							dedication and hard work or Ibrahim Fadel, who created and
							maintains this website.
							<br />
							<br />
							Yours Truly,
							<br />
							<br />
							Phillip Kong, Editor-in-chief
							<br />
							<br />
							<br />
						</p>
					</div>
					<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
					<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
					<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
					<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
					<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
				</div>
			</div>
		);
	}
}

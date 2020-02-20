import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/Navbar/NavbarContainer';

import {
	title,
	editorsNote,
	editorsText,
	editorsList,
} from './styles.module.scss';
import '../../styles/styles.scss';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<h1 id={title}>From the Editor</h1>
				<div id={editorsNote}>
					<p className={editorsText}>
						In 1961, two Portuguese students were imprisoned for raising a toast to freedom. Peter Benenson, a vigilant British lawyer, sparked conversation and action around the world about the issue through an article he published in the Observer. In Benenson’s initiative, the organization Amnesty International was born.
						<br></br>
						<br></br>
						Since Amnesty’s beginning, the organization has been driven to protect human rights around the world. By investigating and revealing facts about violations, lobbying governments and large corporations, and mobilizing millions around the world to take a stand for change, Amnesty strives to support individuals in and/or out of power.
						<br></br>
						<br></br>
						Through the collective effort of organizers to civilian supporters, Amnesty has had many successes. In 1963, Amnesty released Ukrainian Archbishop Josyf Slipyi, a prisoner of conscience in Siberia through protest. In 1972, Amnesty launched it’s first campaign against torture, which was later adopted by the United Nations. Finally, Amnesty was awarded the Nobel Peace Prize in 1977.
						<br></br>
						<br></br>
						“Only when the last prisoner of conscience has been freed, when the last torture chamber has been closed, when the United Nations Universal Declaration of Human Rights is a reality for the world’s people, will our work be done.”
						<br></br>
						<br></br>
						-Peter Benenson, Amnesty International founder
						<br></br>
						<br></br>
						As mentioned on our website (amnestyucc.com), the Amnesty Club at UCC aims to...
					</p>
					<ol id={editorsList}>
						<li>Raise awareness and educate about humanitarian issues</li>
						<li>Promote and encourage action from the community</li>
						<li>Create a space for meaningful discussion about human rights</li>
					</ol>
					<p className={editorsText}>
					This year, the club has chosen to focus our publications by region. Although we intend to examine other areas such as South America, the Middle East, and North America, our first publication of 2020 investigates human rights issues in Asia.
					<br></br>
					<br></br>
					If you’re interested in joining the club or even just writing articles for publications like these, feel free to join the club on ManageBac.
					<br></br>
					<br></br>
					Thanks for your time!
					<br></br>
					<br></br>
					- Robbie Evans
					</p>
				</div>
			</div>
		);
	}
}

export default Home;

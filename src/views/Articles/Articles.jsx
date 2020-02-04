import React from 'react';
import 'bootstrap';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar/NavbarContainer';
import {
	title,
	adminTitle,
	adminButton,
	articlePreviewContainer,
	articlePreviewImg,
	articlePreviewTitle,
	articlePreview,
} from './styles.module.scss';

const cardStyle = {
	textAlign: 'center',
	backgroundColor: '#ececec',
	borderRadius: '5px',
	marginTop: '5vh',
};

const cardBodyStyle = {
	color: 'black',
	display: 'flex',
	justifyContent: 'space-evenly',
	flexDirection: 'column',
	height: '15vh',
};

const cardTitleStyle = {
	fontSize: '1.5em',
};

const cardImageStyle = {
	width: '100%',
	borderRadius: '5px',
	borderBottomRightRadius: '0px',
	borderBottomLeftRadius: '0px',
};

export default class Articles extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar></Navbar>

				<h1 id={title}>Articles</h1>

				<div id={articlePreviewContainer}>
					<Link
						style={{
							width: '30%',
						}}
						to={{
							pathname: '/articles/uyghursinchinage',
							state: {
								title: 'Uyghurs in China',
								author: 'Ibrahim Fadel',
								date: '10/10/10',
								imageUrl: undefined,
								body: `Uyghur is probably an unfamiliar name to many readers. Uyghurs are a group of Turkic-speaking Muslims from Central Asia. Over eleven million Uyghurs live in China. Most of them reside in the autonomous Xinjiang region in western China. Imperial China first seized the region in the middle of the 18th century, but the Uyghur always resented Chinese domination. They briefly declared independence in 1949, but the Communist Chinese were able to reincorporate them into the People’s Republic. They were given special status as an autonomous region, but in recent years, China has taken steps to incorporate it more directly under its control, by encouraging ethnic Han Chinese to relocate to Xinjiang. This in turn resulted in a renewed Uyghur separatist movement.


								The current Chinese President Xi Jinping has imposed a draconian system of control this region. The Chinese government, relying on sophisticated surveillance technology, combined with very strict policing, are systematically oppressing the Uyghurs in Xinjiang . Government officials have even installed invasive surveillance software on Uyghurs’ phones. This software downloads users’ telephone calls, text messages, contacts, calendar entries, and apps. Facial detection scanners and cameras are everywhere, even in mosques. The Chinese government has also engaged in the destruction of the region’s historical architecture and mosques.

								The worst violation of Uyghur rights has been the arbitrary imprisonment of up to a million or more Uyghurs in what are effectively internment camps, although China calls them “Vocational Education and Training Centers”.  China insists that its crackdown on the Uyghurs is a legitimate response to a national security threat that Uyghur separatism represents. Chinese police arbitrarily arrest Uyghurs, and detain them in these camps, often with no trial, or accusation of a crime. According to the US State Department and the UN,  China holds at least one million Uyghurs in these internment camps. China’s policy of mass surveillance and detention became much more severe since 2016. China has pressured numerous countries, such as Egypt, Malaysia, and Pakistan, to deport Uyghur students back to China, where many are “disappeared,” never to be seen again. Displaying any behaviour that the Chinese government deems “foreign,” such as praying or wearing a beard, may result in immediate imprisonment. The Chinese government has said these actions are necessary to halt the spread of Islamist militancy. Because the Chinese government has placed severe restrictions on information flow about these camps, initially even denying their existence, little is known with certainty about what takes place inside. We have seen reports of organ harvesting and medical experimentation as well as prisoners being forced to speak Mandarin and study communist propaganda.
								On arriving to China to visit her parents, Mihrigul Tursun, a Uyghur woman was immediately handcuffed, and had a hood placed over her head. After undergoing several rounds interrogations (some of which included torture by electric shock), she and her three children were imprisoned. After many weeks without seeing her children she was allowed to see them through a glass window. She noticed holes in their necks where they were operated on. The next day, she was shown the corpse of her eldest son. She later escaped from China back to the United States, where she provided detailed testimony to the National Press Club. She described torture, and beatings as regular occurrences within the camps. She said detainees are forced to drink alcohol and eat pork, in violation of Islamic rules proscribing both. Others have reported sexual abuse, including rape and forced abortions. She also said they were sometimes made to take unknown pills, which would induce fainting, bleeding or cessation of menstruation.

								These internment camps represent one of the most wide-spread and large-scale ongoing case of human rights abuse in modern history. Despite that, only twenty-two of 193 members of the United Nations, have signed a joint letter to the UN Human Rights Council urging China to close the camps. An astounding 38 countries have signed a letter praising China’s work in Xinjiang. There seems to be no end in sight to the Uyghurs’ suffering.  Unfortunately, the international community has failed to educate the public or stop China. Although we know what’s going on, nobody seems to care enough to risk their relationship with China. I urge you, however, to remember the Uyghurs’ plight and tell your friends about their situation.
								`,
							},
						}}
					>
						<div className="card" style={cardStyle}>
							<img className="card-img-top" style={cardImageStyle}></img>
							<div className="card-body" style={cardBodyStyle}>
								<h5 className="card-title" style={cardTitleStyle}>
									Uyghurs in China
								</h5>
								<p>By: Ibrahim Fadel</p>
								<p>10/101/0</p>
							</div>
						</div>
					</Link>
					<br />
					<br />
					<br />
					<br />
					<Link
						style={{
							width: '30%',
						}}
						to={{
							pathname: '/articles/Rohingya Crisis',
							state: {
								title: 'Rohingya Crisis',
								author: 'Francesco Rende',
								date: '10/10/10',
								imageUrl: undefined,
								body: `Last year, Amnesty International published numerous pieces on the Rohingya refugee crisis, a crisis that has been going on since 2015. To summarize the problem, since August 2017, over 671,000 Rohingya Muslins, an ethnic minority in Burma, have been forced out of the Burmese state of Rakhine. The Burmese government has been perpetrating numerous atrocities against the Rohingyas, including what is described by the United Nations as a “textbook example of ethnic cleansing”, as well as numerous acts of sexual violence. Unfortunately, this is not the beginning of the oppression of the Rohingyas;: they have long faced discrimination from the Burmese government, including denial of citizenship and restricted access to healthcare. Furthermore, this is not even the first wave of violence: the Rohingyas faced another onslaught of ethnic cleansing in 2012.
								So what is the situation like for those lucky enough to escape Burma? Well, for the refugees currently living in Bangladesh, not so great. It could be argued that the move from Burma to Bangladesh is almost a lateral move. The Bangladeshi government has recently been restricting the freedoms of the refugees in their camps. The government ordered numerous phone companies to shut down phone service in the camps, and restricted the movement of the refugees inside the camp, allowing few people to enter and leave. This in direct violation of the International Covenant on Civil and Political Rights, something that Bangladesh had agreed to. The government has also increased the military presence in the camps, supposedly to maintain order, but many refugees have stated that they are being harassed by the officers.
								Even worse, the Bangladeshi government has banned certain NGO aid organizations from assisting at the camps, further worsening the squalor in which the refugees are forced to live. The government even asked two foreign aid workers to leave the country and suspended three government officials for allowing the refugees to state a rally in Kutupalong Camp. And it isn’t just the state of life in the camps that the Bangladeshi government is affecting. There have been instances of alleged Rohingya refugees committing crimes in Bangladesh and being killed by police soon after, such as in the murder of Omar Faruk. Faruk was a leader in the youth wing of the Awami League, a major political party in Bangladesh, and was killed, allegedly by Rohingya refugees according to the police. Four Rohingya refugees were later killed by the police, allegedly in ‘crossfire’.
								All in all, the struggles faced by the Rohingya Muslims will not simply disappear once they leave their country, and often leaving the country may not even be safer than staying behind. If something is to be done, the global community will need to stop the violence at its core (ie. in Burma), and not simply urge others to take in the refugees, because as is seen from the issues in Bangladesh, not all countries will be so welcoming.
								`,
							},
						}}
					>
						<div className="card" style={cardStyle}>
							<img className="card-img-top" style={cardImageStyle}></img>
							<div className="card-body" style={cardBodyStyle}>
								<h5 className="card-title" style={cardTitleStyle}>
									Rohingya Crisis
								</h5>
								<p>By: Francesco Rende</p>
								<p>10/101/0</p>
							</div>
						</div>
					</Link>
					<Link
						style={{
							width: '30%',
						}}
						to={{
							pathname: '/articles/uyghursinchinage',
							state: {
								title: 'Hong Kong',
								author: 'Daniel Botros',
								date: '10/10/10',
								imageUrl: undefined,
								body: `Riots, month-long protests, and outbreaks of violence. It seems as if rampage and chaos are the only constants in Hong Kong, as the local citizens are facing violent restrictions on their right to peaceful assembly and freedom of expression.

								Earlier this year, the government of Hong Kong proposed a bill that would permit the extradition of suspects from Hong Kong to mainland China. Although the bill has since been withdrawn, the violence and protests ensue.

								This is likely because the bill is representative of a much deeper, underlying issue. The tense relationship between the two regions has existed since 1997, when Britain returned Hong Kong to mainland China under the ‘one country, two systems’ principle. And ever since then, China has made several attempts to erode the autonomy of the region, ultimately returning authority to the mainland. However, it seems as if this bill has pushed the tolerance of the citizens of Hong Kong to their limit. There has been severe pushback from the citizens of Hong Kong, as they have lined the streets of various cities for 22 straight weeks, with no near end in sight.

								Article 4 of the Basic Law in post-colonial Hong Kong states that the mainland must safeguard the rights and freedoms of the residents of Hong Kong. Despite this, researchers have documented the unnecessary and excessive use of force, including the employment of tear gas, batons and other weapons used by police on the largely peaceful protesters. Moreover, the police have applied vague charges to arrest and prosecute thousands of peaceful protesters.

								With these incidents occurring more and more frequently, a peaceful resolution is seeming to be less and less likely. As such, we must encourage the authorities to find a diplomatic solution sooner rather than later.
								`,
							},
						}}
					>
						<div className="card" style={cardStyle}>
							<img className="card-img-top" style={cardImageStyle}></img>
							<div className="card-body" style={cardBodyStyle}>
								<h5 className="card-title" style={cardTitleStyle}>
									Hong Kong
								</h5>
								<p>By: Daniel Botros</p>
								<p>10/101/0</p>
							</div>
						</div>
					</Link>
					<br></br>
					<br></br>
					<Link
						style={{
							width: '30%',
						}}
						to={{
							pathname: '/articles/uyghursinchinage',
							state: {
								title: 'China Human Rights',
								author: 'Elias Hammoud',
								date: '10/10/10',
								imageUrl: undefined,
								body: `Since the creation of its republic, China has always been scrutinized by the public for its iniquitous policies regarding human rights. Whether it’s through politically motivated prosecutions or its failure to adopt gender parity into its society,

								China has continuously managed to sustain an unfriendly relationship with its citizens.

								Due to its restricting policies, any sentiments expressing revolt have been immediately suppressed by its government using any means necessary.
								Lately, following the implementation of the Cybersecurity Law, as well as the suspension of the extradition bill, the Chinese people seem to be displeased with their authoritative regime. In fact, they have been leading a series of large scale revolts and protests expressing their deep disapproval for the harsh policies limiting their technological freedom. Examples of these include the restriction of privileges like social media sites (i.e. Instagram and twitter), or the invasion of privacy which vis à vis the cybersecurity law. These revolts have further captured the public’s attention, and many of them have made it to the front page of prominent newspapers such as the New York Times. Unlike the Umbrella movement in 2014, these protests have no leader and have not yet managed to channel their anger into more peaceful means of achieving their goal like public speakers. Instead, they have resulted to more violent actions to obtain their most desired rights.
								Unfortunately, these violent rebellions have resulted in the desecration of properties and the exacerbation of relations with the government. But if history has shown us anything, it is that in order for change to occur, strong and influential action must be taken - just like the driven people of China are taking now.
								`,
							},
						}}
					>
						<div className="card" style={cardStyle}>
							<img className="card-img-top" style={cardImageStyle}></img>
							<div className="card-body" style={cardBodyStyle}>
								<h5 className="card-title" style={cardTitleStyle}>
									China Human Rights
								</h5>
								<p>By: Elias Hammoud</p>
								<p>10/101/0</p>
							</div>
						</div>
					</Link>
					<Link
						style={{
							width: '30%',
						}}
						to={{
							pathname: '/articles/uyghursinchinage',
							state: {
								title: 'Vietnam: The War between Oppression and The Internet',
								author: 'Nasrudeen Oladimeji',
								date: '10/10/10',
								imageUrl: undefined,
								body: `The Communist Party of Vietnam leads the entire nation’s politics and government. This single-party state monopolizes authorized social organizations, media outlets, and all other forms of publications. The result is censorship of the protesting activist’s fight for the people’s rights to freedom of expression, religion, and press.
								Vietnamese rights activist and blogger Ho Van Hai has been put on trial for such opposition. These trials impose sentences of four to twelve years in prison on the basis of “conducting propaganda against the state”. Protestors like Ho Van Hai face constant physical abuse from government officials and affiliated thugs, neither of whom are punished for these attacks.
								These human rights violations have extended beyond just the streets. Now, activists are being arrested for facebook posts as well. “Making, storing, disseminating, or propagandizing information, materials, and products that aim to oppose the State of the Socialist Republic of Vietnam” under article 117 of the 2015 penal code is what is used to arrest people like Nguyen Ngoc Ahn and put them under investigation.
								It is still unclear as to which of his posts they objected to, however, his account shows active support for democracy in the state and clear opposition against the current party. Despite the government’s attempt to censor online media by arresting Nguyen Ngoc Ahn, it has only brought more attention to him and other activists venting their frustrations on the internet.
								Nguyen Ngoc Ahn’s wife visited his cell in jail this October.  She too went to Facebook and spoke out about the dehumanizing treatment of the prison. She said that Nguyen Ngoc Ahn “dragged his feet with a lot of difficulties” from the beatings he received from the guards and the prisoners. Du Huu Cuong, another prisoner, was beaten until he collapsed. These attacks have all been reported to the guards, still, none took any action, just as they had not against the affiliated thugs on the streets.
								`,
							},
						}}
					>
						<div className="card" style={cardStyle}>
							<img className="card-img-top" style={cardImageStyle}></img>
							<div className="card-body" style={cardBodyStyle}>
								<h5 className="card-title" style={cardTitleStyle}>
									Vietnam: The War between Oppression and The Internet
								</h5>
								<p>By: Nasrudeen Oladimeji</p>
								<p>10/101/0</p>
							</div>
						</div>
					</Link>
				</div>
				{/* </div> */}
				{/* // <div> */}
				{/* // 	<Navbar></Navbar> */}

				{/* // 	<h1 id={title}>Articles</h1> */}

				{/* // 	<div id={articlePreviewContainer}> */}
				{/* // 		{this.props.articles.map((article, i) => { */}
				{/* // 			return ( */}
				{/* // 				<Link */}
				{/* // 					to={{ */}
				{/* // 						pathname: "/articles/" + article.url, */}
				{/* // 						state: {
			// 							title: article.title,
			// 							author: article.author,
			// 							date: article.date,
			// 							imageUrl: article.imageUrl,
			// 							body: article.body
			// 						}
			// 					}}
			// 					key={i}
			// 				>
			// 					<div className="card" style={cardStyle}>
			// 						<img
			// 							className="card-img-top"
			// 							src={article.imageUrl}
			// 							alt="Card image cap"
			// 							style={cardImageStyle}
			// 						></img>
			// 						<div className="card-body" style={cardBodyStyle}>
			// 							<h5 className="card-title" style={cardTitleStyle}>
			// 								{article.title}
			// 							</h5>
			// 							<p>By: {article.author}</p>
			// 							<p>{article.date}</p>
			// 						</div>
			// 					</div>
			// 				</Link>
			// 			);
			// 		})}
			// 	</div>

			// 	{this.props.admin ? (
			// 		<div>
			// 			<h1 id={adminTitle}>Welcome Admin</h1>
			// 			<button id={adminButton} onClick={this.props.postArticle}>
			// 				Post Article
			// 			</button>
			// 		</div>
			// 	) : (
			// 		<div></div>
			// 	)}
			// </div> */}
			</div>
			// </div>
		);
	}
}

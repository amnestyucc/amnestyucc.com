import React from 'react';

import { withRouter } from 'react-router-dom';
import { title } from './styles.module.scss';
import { admins } from '../../utils/admins';
import { auth, db, storage } from '../../utils/firebase';
import Articles from './Articles';
import { asciiToHex, hexToAscii } from '../../utils/helpers';
import { getArticles } from '../../utils/db';

export default class ArticlesContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			admin: false,
			articles: null,
			response: false,
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(user => {
			if (user) {
				this.setState({ user }, () => {
					this.checkIfAdmin();
				});
			}
		});

		this.getArticles();
	}

	checkIfAdmin = async () => {
		let email;
		if (!this.state.user) {
			return;
		}
		for (let admin of admins) {
			db.ref('/users/')
				.once('value')
				.then(snapshot => {
					snapshot.forEach(user => {
						if (user.val().uid === this.state.user.uid) {
							email = user.val().email;
						}
					});
				})
				.then(() => {
					if (email === admin) {
						this.setState({
							admin: true,
						});
					}
				});
		}
	};

	postArticle = () => {
		this.props.history.push('/postArticle');
	};

	getArticles = async () => {
		this.setState({
			response: true,
		});
		// const articles = await getArticles();
		// console.log(articles);
		// let articles = [];
		// db.ref('/articles/')
		// 	.once('value')
		// 	.then(snapshot => {
		// 		const numChildren = snapshot.numChildren();
		// 		if (numChildren === 0) {
		// 			this.setState({
		// 				response: true,
		// 				articles: [],
		// 			});
		// 		}
		// 		let count = 0;
		// 		snapshot.forEach(article => {
		// 			count++;
		// 			const Article = article.val();
		// 			storage
		// 				.ref('/images/' + Article.image)
		// 				.getDownloadURL()
		// 				.then(url => {
		// 					const articleobj = {
		// 						title: Article.title,
		// 						imageUrl: url,
		// 						date: Article.date,
		// 						author: Article.author,
		// 						url: this.getUrl(Article.title, Article.author),
		// 						body: Article.body,
		// 					};
		// 					articles.push(articleobj);
		// 				})
		// 				.then(() => {
		// 					if (count === numChildren) {
		// 						this.setState({
		// 							articles: articles,
		// 							response: true,
		// 						});
		// 					}
		// 				});
		// 		});
		// 	});
	};

	render() {
		if (this.state.response) {
			return <Articles></Articles>;
		} else {
			return <h1 style={{ color: 'white' }}>Loading...</h1>;
		}
	}
}

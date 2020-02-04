import { db, storage } from './firebase';
import { asciiToHex } from './helpers';

export const getArticles = async () => {
	let articles = [];
	return db
		.ref('/articles')
		.once('value')
		.then(_articles => {
			_articles.forEach(_article => {
				const article = _article.val();
				console.log(`/images/${article.image}`);
				const ref = storage.ref(`/images/${article.image}`);
				ref.getDownloadURL();
				// ref.getDownloadURL.subscribe(url => {
				// 	console.log(url);
				// });
				// storage
				// 	.ref(`/images/${article.image}`)
				// 	.getDownloadURL()
				// 	.then(url => {
				// 		const articleobj = {
				// 			title: article.title,
				// 			imageUrl: url,
				// 			date: article.date,
				// 			author: article.author,
				// 			url: getUrl(article.title, article.author),
				// 			body: article.body,
				// 		};
				// 		articles.push(articleobj);
				// 		console.log(articleobj);
				// 	});
			});
		})
		.then(() => {
			console.log(articles);
			return articles;
		});
};

const getUrl = (title, author) => {
	const titleHex = asciiToHex(title);
	const authorHex = asciiToHex(author);
	return titleHex + authorHex;
};

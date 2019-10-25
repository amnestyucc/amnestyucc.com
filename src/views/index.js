// import HomeContainer from "./Home-test/HomeContainer";
import Home from "./Home/Home";
import LoginContainer from "./Login/LoginContainer";
import SignupContainer from "./Signup/SignupContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";
import PostArticleContainer from "./PostArticle/PostArticleContainer";
import ArticleContainer from "./Article/ArticleContainer";

import NotFound from "./NotFound";

const views = {
	Home: Home,
	Login: LoginContainer,
	Signup: SignupContainer,
	Articles: ArticlesContainer,
	PostArticle: PostArticleContainer,
	Article: ArticleContainer,
	NotFound: NotFound
};

export default views;

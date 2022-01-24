export interface IArticle {
  id: string;
  title: string;
  author: string;
}

export interface IArticleContent {
  content: string;
  id: string;
}

export interface IArticleResponse {
  articles: IArticle[];
  articlesContent: IArticleContent[];
}

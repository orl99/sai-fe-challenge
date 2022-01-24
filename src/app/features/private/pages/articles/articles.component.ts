import { ActivatedRoute } from '@angular/router';
import { IArticle, IArticleContent } from '../../../../models/articles.model';
import { ArticleService } from './../../../../services/articles/article.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public allArticles: IArticle[] = [];
  public allArticleContent: IArticleContent[] = [];
  public selectedArticle: IArticleContent;
  public selectedArticleId: string;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  async ngOnInit() {
    await this.getAllArticles();
    this.getQueryParams();
  }

  private async getAllArticles() {
    const allArticlesRes = await this.articleService.getArticles();
    if(allArticlesRes.ok) {
      this.allArticleContent = [...allArticlesRes.response.articlesContent];
      this.allArticles = [...allArticlesRes.response.articles];
    }
  }

  private findArticle(id: string) {
    const selectedArticle = this.allArticleContent.find(articleC => articleC.id === id);
    this.selectedArticle = selectedArticle;
  }

  public selectArticle(id: string) {
    this.findArticle(id);
    this.updateQueryParams(id);
  }

  // BONUS
  private updateQueryParams(id: string) {
    this.location.replaceState(`/private/articles/${id}`);
  }

  private getQueryParams() {
    this.route.params.subscribe(params => {
      this.findArticle(params['articleID']);
    });
  }

}

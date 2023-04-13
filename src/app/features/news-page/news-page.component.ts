import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'environments';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  constructor( private data: DataService){}

  ID_API = environment.NEWS_ID_API;
  NEWS_API = environment.NEWS_DATA_API;
  newsIdArray = [];
  newsData:any = [];
  start:number = 0;
  end:number = 10;
  searchValue = '';

  ngOnInit(): void {
    this.getNews(this.start,this.end)
  }

  LoadMore():void {
    this.getNews(this.start += 10, this.end += 10)
  }

  getNews(startIndex:number, endIndex:number){
    this.data.getNewsId( this.ID_API)
    .subscribe((data: any) => {
      this.newsIdArray = data

      for (let i = startIndex; i < endIndex; i++) { 
        let newsUrl = this.NEWS_API + this.newsIdArray[i] + '.json';
        this.data.getNewsData(newsUrl)
        .subscribe((data:any)=> { this.newsData.push(data)});
      };
    });
  }

}

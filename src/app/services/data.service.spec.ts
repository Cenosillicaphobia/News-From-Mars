import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get news', () => {
    const mockNews = [{title: 'Fake news', body: 'Fake news body'}];
    service.getNewsData('https://hacker-news.firebaseio.com/v0/item/27933223').subscribe((news) => {
      expect(news).toEqual(mockNews);
    });
  });

});

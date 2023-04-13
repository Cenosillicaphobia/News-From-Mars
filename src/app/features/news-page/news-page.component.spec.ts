import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsPageComponent } from './news-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

describe('NewsPageComponent', () => {
  let component: NewsPageComponent;
  let fixture: ComponentFixture<NewsPageComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPageComponent ],
      imports: [ HttpClientTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPageComponent);
    dataService = TestBed.inject(DataService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getNews method on Init', () => {
    spyOn(component, 'getNews');
    component.ngOnInit();
    expect(component.getNews).toHaveBeenCalled();
  });
    
  it('should call getNews method on LoadMore', () => {
    spyOn(component, 'getNews');
    component.LoadMore();
    expect(component.getNews).toHaveBeenCalled();
  });
  
});

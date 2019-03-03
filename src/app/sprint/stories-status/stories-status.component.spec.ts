import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesStatusComponent } from './stories-status.component';

describe('StoriesStatusComponent', () => {
  let component: StoriesStatusComponent;
  let fixture: ComponentFixture<StoriesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecommunityComponent } from './singlecommunity.component';

describe('SinglecommunityComponent', () => {
  let component: SinglecommunityComponent;
  let fixture: ComponentFixture<SinglecommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

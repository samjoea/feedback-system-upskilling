import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontMentorComponent } from './front-mentor.component';

describe('FrontMentorComponent', () => {
  let component: FrontMentorComponent;
  let fixture: ComponentFixture<FrontMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontMentorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

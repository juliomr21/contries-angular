import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContryDetailComponent } from './contry-detail.component';

describe('ContryDetailComponent', () => {
  let component: ContryDetailComponent;
  let fixture: ComponentFixture<ContryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

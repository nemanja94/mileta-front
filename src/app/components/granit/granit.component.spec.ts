import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GranitComponent } from './granit.component';

describe('GranitComponent', () => {
  let component: GranitComponent;
  let fixture: ComponentFixture<GranitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GranitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MermerComponent } from './mermer.component';

describe('MermerComponent', () => {
  let component: MermerComponent;
  let fixture: ComponentFixture<MermerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MermerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MermerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

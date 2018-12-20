import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShankhComponent } from './shankh.component';

describe('ShankhComponent', () => {
  let component: ShankhComponent;
  let fixture: ComponentFixture<ShankhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShankhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShankhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

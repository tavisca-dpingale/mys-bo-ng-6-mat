import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnakComponent } from './anak.component';

describe('AnakComponent', () => {
  let component: AnakComponent;
  let fixture: ComponentFixture<AnakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

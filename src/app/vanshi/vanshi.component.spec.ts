import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanshiComponent } from './vanshi.component';

describe('VanshiComponent', () => {
  let component: VanshiComponent;
  let fixture: ComponentFixture<VanshiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanshiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

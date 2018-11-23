import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarlayoutComponent } from './toolbarlayout.component';

describe('ToolbarlayoutComponent', () => {
  let component: ToolbarlayoutComponent;
  let fixture: ComponentFixture<ToolbarlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

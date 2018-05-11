import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasUnoComponent } from './graficas-uno.component';

describe('GraficasUnoComponent', () => {
  let component: GraficasUnoComponent;
  let fixture: ComponentFixture<GraficasUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

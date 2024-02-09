import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEjemploComponent } from './tabla-ejemplo.component';

describe('TablaEjemploComponent', () => {
  let component: TablaEjemploComponent;
  let fixture: ComponentFixture<TablaEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEjemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

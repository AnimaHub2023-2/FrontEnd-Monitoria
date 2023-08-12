import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoriasComponent } from './monitorias.component';

describe('MonitoriasComponent', () => {
  let component: MonitoriasComponent;
  let fixture: ComponentFixture<MonitoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonitoriasComponent]
    });
    fixture = TestBed.createComponent(MonitoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

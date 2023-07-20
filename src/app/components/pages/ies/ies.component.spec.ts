import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IesComponent } from './ies.component';

describe('IesComponent', () => {
  let component: IesComponent;
  let fixture: ComponentFixture<IesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IesComponent]
    });
    fixture = TestBed.createComponent(IesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

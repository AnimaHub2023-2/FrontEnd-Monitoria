import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAformComponent } from './modal-aform.component';

describe('ModalAformComponent', () => {
  let component: ModalAformComponent;
  let fixture: ComponentFixture<ModalAformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalAformComponent]
    });
    fixture = TestBed.createComponent(ModalAformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

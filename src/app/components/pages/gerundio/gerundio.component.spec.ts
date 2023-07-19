import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerundioComponent } from './gerundio.component';

describe('GerundComponent', () => {
  let component: GerundioComponent;
  let fixture: ComponentFixture<GerundioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerundioComponent]
    });
    fixture = TestBed.createComponent(GerundioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

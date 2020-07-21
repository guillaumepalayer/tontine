import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSellShareComponent } from './modal-sell-share.component';

describe('ModalSellShareComponent', () => {
  let component: ModalSellShareComponent;
  let fixture: ComponentFixture<ModalSellShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSellShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSellShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

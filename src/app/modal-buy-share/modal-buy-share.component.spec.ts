import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuyShareComponent } from './modal-buy-share.component';

describe('ModalBuyShareComponent', () => {
  let component: ModalBuyShareComponent;
  let fixture: ComponentFixture<ModalBuyShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalBuyShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

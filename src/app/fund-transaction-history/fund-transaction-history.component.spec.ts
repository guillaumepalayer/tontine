import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransactionHistoryComponent } from './fund-transaction-history.component';

describe('FundTransactionHistoryComponent', () => {
  let component: FundTransactionHistoryComponent;
  let fixture: ComponentFixture<FundTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

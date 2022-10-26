import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDepositComponent } from './client-deposit.component';

describe('ClientDepositComponent', () => {
  let component: ClientDepositComponent;
  let fixture: ComponentFixture<ClientDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

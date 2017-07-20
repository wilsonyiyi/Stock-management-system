/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockCartComponent } from './stock-cart.component';

describe('StockCartComponent', () => {
  let component: StockCartComponent;
  let fixture: ComponentFixture<StockCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

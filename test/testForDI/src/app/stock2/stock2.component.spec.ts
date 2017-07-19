/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Stock2Component } from './stock2.component';

describe('Stock2Component', () => {
  let component: Stock2Component;
  let fixture: ComponentFixture<Stock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

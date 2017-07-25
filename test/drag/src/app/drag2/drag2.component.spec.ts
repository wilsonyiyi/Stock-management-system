/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Drag2Component } from './drag2.component';

describe('Drag2Component', () => {
  let component: Drag2Component;
  let fixture: ComponentFixture<Drag2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drag2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

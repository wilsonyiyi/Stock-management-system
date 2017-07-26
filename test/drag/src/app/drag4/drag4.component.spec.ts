/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Drag4Component } from './drag4.component';

describe('Drag4Component', () => {
  let component: Drag4Component;
  let fixture: ComponentFixture<Drag4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drag4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drag4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

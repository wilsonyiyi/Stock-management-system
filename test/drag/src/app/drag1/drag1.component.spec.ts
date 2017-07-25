/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Drag1Component } from './drag1.component';

describe('Drag1Component', () => {
  let component: Drag1Component;
  let fixture: ComponentFixture<Drag1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Drag1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Drag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

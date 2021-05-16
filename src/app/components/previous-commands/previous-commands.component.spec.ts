import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCommandsComponent } from './previous-commands.component';

describe('PreviousCommandsComponent', () => {
  let component: PreviousCommandsComponent;
  let fixture: ComponentFixture<PreviousCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

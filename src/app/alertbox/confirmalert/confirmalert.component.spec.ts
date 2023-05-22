import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmalertComponent } from './confirmalert.component';

describe('ConfirmalertComponent', () => {
  let component: ConfirmalertComponent;
  let fixture: ComponentFixture<ConfirmalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

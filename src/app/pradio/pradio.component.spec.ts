import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRADIOComponent } from './pradio.component';

describe('PRADIOComponent', () => {
  let component: PRADIOComponent;
  let fixture: ComponentFixture<PRADIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRADIOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRADIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

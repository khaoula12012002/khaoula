import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextsComponent } from './add-texts.component';

describe('AddTextsComponent', () => {
  let component: AddTextsComponent;
  let fixture: ComponentFixture<AddTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTextsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

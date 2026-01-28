import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButton2 } from './card-button-2';

describe('CardButton2', () => {
  let component: CardButton2;
  let fixture: ComponentFixture<CardButton2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardButton2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardButton2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

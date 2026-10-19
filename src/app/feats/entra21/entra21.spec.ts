import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Entra21 } from './entra21';

describe('Entra21', () => {
  let component: Entra21;
  let fixture: ComponentFixture<Entra21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entra21],
    }).compileComponents();

    fixture = TestBed.createComponent(Entra21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

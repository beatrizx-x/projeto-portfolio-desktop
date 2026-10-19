import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spotfy } from './spotfy';

describe('Spotfy', () => {
  let component: Spotfy;
  let fixture: ComponentFixture<Spotfy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spotfy],
    }).compileComponents();

    fixture = TestBed.createComponent(Spotfy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

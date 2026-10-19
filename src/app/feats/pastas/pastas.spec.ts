import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pastas } from './pastas';

describe('Pastas', () => {
  let component: Pastas;
  let fixture: ComponentFixture<Pastas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pastas],
    }).compileComponents();

    fixture = TestBed.createComponent(Pastas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

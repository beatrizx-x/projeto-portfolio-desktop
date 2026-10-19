import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrilhaSonora } from './trilha-sonora';

describe('TrilhaSonora', () => {
  let component: TrilhaSonora;
  let fixture: ComponentFixture<TrilhaSonora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrilhaSonora],
    }).compileComponents();

    fixture = TestBed.createComponent(TrilhaSonora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Janela } from './janela';

describe('Janela', () => {
  let component: Janela;
  let fixture: ComponentFixture<Janela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Janela],
    }).compileComponents();

    fixture = TestBed.createComponent(Janela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

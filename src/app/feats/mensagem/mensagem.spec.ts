import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mensagem } from './mensagem';

describe('Mensagem', () => {
  let component: Mensagem;
  let fixture: ComponentFixture<Mensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mensagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Mensagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

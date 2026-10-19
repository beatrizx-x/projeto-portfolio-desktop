import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curriculo } from './curriculo';

describe('Curriculo', () => {
  let component: Curriculo;
  let fixture: ComponentFixture<Curriculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Curriculo],
    }).compileComponents();

    fixture = TestBed.createComponent(Curriculo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

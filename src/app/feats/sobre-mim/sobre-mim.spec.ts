import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreMim } from './sobre-mim';

describe('SobreMim', () => {
  let component: SobreMim;
  let fixture: ComponentFixture<SobreMim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreMim],
    }).compileComponents();

    fixture = TestBed.createComponent(SobreMim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaReadComponent } from './materia-read.component';

describe('MateriaReadComponent', () => {
  let component: MateriaReadComponent;
  let fixture: ComponentFixture<MateriaReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateriaReadComponent]
    });
    fixture = TestBed.createComponent(MateriaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

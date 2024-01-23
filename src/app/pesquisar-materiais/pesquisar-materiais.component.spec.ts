import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarMateriaisComponent } from './pesquisar-materiais.component';

describe('PesquisarMateriaisComponent', () => {
  let component: PesquisarMateriaisComponent;
  let fixture: ComponentFixture<PesquisarMateriaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesquisarMateriaisComponent]
    });
    fixture = TestBed.createComponent(PesquisarMateriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

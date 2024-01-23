import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequisicaoComponent } from './material-requisicao.component';

describe('MaterialRequisicaoComponent', () => {
  let component: MaterialRequisicaoComponent;
  let fixture: ComponentFixture<MaterialRequisicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialRequisicaoComponent]
    });
    fixture = TestBed.createComponent(MaterialRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

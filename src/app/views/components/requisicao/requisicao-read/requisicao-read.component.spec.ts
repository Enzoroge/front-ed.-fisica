import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoReadComponent } from './requisicao-read.component';

describe('RequisicaoReadComponent', () => {
  let component: RequisicaoReadComponent;
  let fixture: ComponentFixture<RequisicaoReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequisicaoReadComponent]
    });
    fixture = TestBed.createComponent(RequisicaoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

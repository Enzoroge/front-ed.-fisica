import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoDeleteComponent } from './requisicao-delete.component';

describe('RequisicaoDeleteComponent', () => {
  let component: RequisicaoDeleteComponent;
  let fixture: ComponentFixture<RequisicaoDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequisicaoDeleteComponent]
    });
    fixture = TestBed.createComponent(RequisicaoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

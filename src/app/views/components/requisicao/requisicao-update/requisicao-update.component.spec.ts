import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoUpdateComponent } from './requisicao-update.component';

describe('RequisicaoUpdateComponent', () => {
  let component: RequisicaoUpdateComponent;
  let fixture: ComponentFixture<RequisicaoUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequisicaoUpdateComponent]
    });
    fixture = TestBed.createComponent(RequisicaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

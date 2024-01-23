import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoReadComponent } from './agendamento-read.component';

describe('AgendamentoReadComponent', () => {
  let component: AgendamentoReadComponent;
  let fixture: ComponentFixture<AgendamentoReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoReadComponent]
    });
    fixture = TestBed.createComponent(AgendamentoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

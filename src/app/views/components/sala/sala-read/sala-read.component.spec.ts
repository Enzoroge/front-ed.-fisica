import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaReadComponent } from './sala-read.component';

describe('SalaReadComponent', () => {
  let component: SalaReadComponent;
  let fixture: ComponentFixture<SalaReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaReadComponent]
    });
    fixture = TestBed.createComponent(SalaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

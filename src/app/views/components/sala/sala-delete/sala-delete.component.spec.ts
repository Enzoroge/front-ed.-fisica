import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDeleteComponent } from './sala-delete.component';

describe('SalaDeleteComponent', () => {
  let component: SalaDeleteComponent;
  let fixture: ComponentFixture<SalaDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaDeleteComponent]
    });
    fixture = TestBed.createComponent(SalaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

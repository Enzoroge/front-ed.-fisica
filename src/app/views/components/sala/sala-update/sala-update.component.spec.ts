import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaUpdateComponent } from './sala-update.component';

describe('SalaUpdateComponent', () => {
  let component: SalaUpdateComponent;
  let fixture: ComponentFixture<SalaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaUpdateComponent]
    });
    fixture = TestBed.createComponent(SalaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodologiasComponent } from './metodologias.component';

describe('MetodologiasComponent', () => {
  let component: MetodologiasComponent;
  let fixture: ComponentFixture<MetodologiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetodologiasComponent]
    });
    fixture = TestBed.createComponent(MetodologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

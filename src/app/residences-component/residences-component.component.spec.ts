import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidencesComponentComponent } from './residences-component.component';

describe('ResidencesComponentComponent', () => {
  let component: ResidencesComponentComponent;
  let fixture: ComponentFixture<ResidencesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidencesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidencesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

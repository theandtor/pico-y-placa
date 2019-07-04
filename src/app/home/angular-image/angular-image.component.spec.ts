import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularImageComponent } from './angular-image.component';

describe('AngularImageComponent', () => {
  let component: AngularImageComponent;
  let fixture: ComponentFixture<AngularImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

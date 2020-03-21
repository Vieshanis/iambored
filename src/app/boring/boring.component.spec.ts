import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoringComponent } from './boring.component';

describe('BoringComponent', () => {
  let component: BoringComponent;
  let fixture: ComponentFixture<BoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

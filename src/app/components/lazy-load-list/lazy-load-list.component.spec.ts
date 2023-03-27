import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadListComponent } from './lazy-load-list.component';

describe('LazyLoadListComponent', () => {
  let component: LazyLoadListComponent;
  let fixture: ComponentFixture<LazyLoadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridTreeComponent } from './grid-tree.component';

describe('GridTreeComponent', () => {
  let component: GridTreeComponent;
  let fixture: ComponentFixture<GridTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

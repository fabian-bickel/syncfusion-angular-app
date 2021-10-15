import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerTreeViewComponent } from './ customer-tree-view.component';

describe('TreeViewComponent', () => {
  let component: CustomerTreeViewComponent;
  let fixture: ComponentFixture<CustomerTreeViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

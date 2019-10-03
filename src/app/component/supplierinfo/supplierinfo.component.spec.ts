import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierinfoComponent } from './supplierinfo.component';

describe('SupplierinfoComponent', () => {
  let component: SupplierinfoComponent;
  let fixture: ComponentFixture<SupplierinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

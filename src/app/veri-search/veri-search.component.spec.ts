import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriSearchComponent } from './veri-search.component';

describe('VeriSearchComponent', () => {
  let component: VeriSearchComponent;
  let fixture: ComponentFixture<VeriSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeriSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

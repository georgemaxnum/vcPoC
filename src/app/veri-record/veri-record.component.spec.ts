import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriRecordComponent } from './veri-record.component';

describe('VeriRecordComponent', () => {
  let component: VeriRecordComponent;
  let fixture: ComponentFixture<VeriRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeriRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

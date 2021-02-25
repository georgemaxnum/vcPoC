import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriVerifyComponent } from './veri-verify.component';

describe('VeriVerifyComponent', () => {
  let component: VeriVerifyComponent;
  let fixture: ComponentFixture<VeriVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeriVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

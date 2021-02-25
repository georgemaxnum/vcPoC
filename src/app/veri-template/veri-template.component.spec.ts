import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeriTemplateComponent } from './veri-template.component';

describe('VeriTemplateComponent', () => {
  let component: VeriTemplateComponent;
  let fixture: ComponentFixture<VeriTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeriTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeriTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

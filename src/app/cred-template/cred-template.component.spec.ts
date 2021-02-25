import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredTemplateComponent } from './cred-template.component';

describe('CredTemplateComponent', () => {
  let component: CredTemplateComponent;
  let fixture: ComponentFixture<CredTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredIssanceComponent } from './cred-issance.component';

describe('CredIssanceComponent', () => {
  let component: CredIssanceComponent;
  let fixture: ComponentFixture<CredIssanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredIssanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredIssanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

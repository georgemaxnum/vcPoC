import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnInvitationComponent } from './conn-invitation.component';

describe('ConnInvitationComponent', () => {
  let component: ConnInvitationComponent;
  let fixture: ComponentFixture<ConnInvitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnInvitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnClientComponent } from './conn-client.component';

describe('ConnClientComponent', () => {
  let component: ConnClientComponent;
  let fixture: ComponentFixture<ConnClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnSearchComponent } from './conn-search.component';

describe('ConnSearchComponent', () => {
  let component: ConnSearchComponent;
  let fixture: ComponentFixture<ConnSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

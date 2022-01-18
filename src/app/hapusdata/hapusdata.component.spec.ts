import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusdataComponent } from './hapusdata.component';

describe('HapusdataComponent', () => {
  let component: HapusdataComponent;
  let fixture: ComponentFixture<HapusdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HapusdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

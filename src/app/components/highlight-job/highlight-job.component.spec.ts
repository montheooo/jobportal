import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightJobComponent } from './highlight-job.component';

describe('HighlightJobComponent', () => {
  let component: HighlightJobComponent;
  let fixture: ComponentFixture<HighlightJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

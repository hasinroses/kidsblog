import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplatelistComponent } from './inline-templatelist.component';

describe('InlineTemplatelistComponent', () => {
  let component: InlineTemplatelistComponent;
  let fixture: ComponentFixture<InlineTemplatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTemplatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineTemplatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

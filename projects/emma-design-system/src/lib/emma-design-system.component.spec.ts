import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmmaDesignSystemComponent } from './emma-design-system.component';

describe('EmmaDesignSystemComponent', () => {
  let component: EmmaDesignSystemComponent;
  let fixture: ComponentFixture<EmmaDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmmaDesignSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmmaDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedataComponent } from './moviedata.component';

describe('MoviedataComponent', () => {
  let component: MoviedataComponent;
  let fixture: ComponentFixture<MoviedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

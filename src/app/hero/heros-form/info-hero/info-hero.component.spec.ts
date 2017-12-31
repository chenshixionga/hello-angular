import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHeroComponent } from './info-hero.component';

describe('InfoHeroComponent', () => {
  let component: InfoHeroComponent;
  let fixture: ComponentFixture<InfoHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

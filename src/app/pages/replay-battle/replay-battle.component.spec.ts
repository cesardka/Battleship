import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayBattleComponent } from './replay-battle.component';

describe('ReplayBattleComponent', () => {
  let component: ReplayBattleComponent;
  let fixture: ComponentFixture<ReplayBattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplayBattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

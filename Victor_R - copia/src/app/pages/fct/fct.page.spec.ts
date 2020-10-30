import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FctPage } from './fct.page';

describe('FctPage', () => {
  let component: FctPage;
  let fixture: ComponentFixture<FctPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FctPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

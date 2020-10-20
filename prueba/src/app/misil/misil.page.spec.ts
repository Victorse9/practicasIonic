import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisilPage } from './misil.page';

describe('MisilPage', () => {
  let component: MisilPage;
  let fixture: ComponentFixture<MisilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

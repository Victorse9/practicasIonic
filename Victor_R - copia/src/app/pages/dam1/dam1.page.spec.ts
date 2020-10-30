import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dam1Page } from './dam1.page';

describe('Dam1Page', () => {
  let component: Dam1Page;
  let fixture: ComponentFixture<Dam1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dam1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dam1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Misil2Page } from './misil2.page';

describe('Misil2Page', () => {
  let component: Misil2Page;
  let fixture: ComponentFixture<Misil2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Misil2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Misil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

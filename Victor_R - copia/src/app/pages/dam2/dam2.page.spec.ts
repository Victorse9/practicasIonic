import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dam2Page } from './dam2.page';

describe('Dam2Page', () => {
  let component: Dam2Page;
  let fixture: ComponentFixture<Dam2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dam2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dam2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

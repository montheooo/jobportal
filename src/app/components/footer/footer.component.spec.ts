import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { Contact } from '../Models/Contact';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent, ContactDetailComponent, SocialMediaComponent, ContactFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the footer attribute with contact data model', () => {

    const contact:Contact = {
      email:'email@email.com',
      phone:'123456789',
      website:'www.test.com',
      address:'ottawa, ontario'
    };

    component.footer = contact;
    fixture.detectChanges();

    expect(component.footer).toEqual(contact);
  });

});

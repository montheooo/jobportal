import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailComponent } from './contact-detail.component';
import { Contact } from '../Models/Contact';

describe('ContactDetailComponent', () => {
  let component: ContactDetailComponent;
  let fixture: ComponentFixture<ContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDetailComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the contact attribute with data model', () => {

    const contact:Contact = {
      email:'email@email.com',
      phone:'123456789',
      website:'www.test.com',
      address:'ottawa, ontario'
    };

    component.contact = contact;
    fixture.detectChanges();

    expect(component.contact).toEqual(contact);
  });


});

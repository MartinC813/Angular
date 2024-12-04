import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearTicketComponent } from './modal-crear-ticket.component';

describe('ModalCrearTicketComponent', () => {
  let component: ModalCrearTicketComponent;
  let fixture: ComponentFixture<ModalCrearTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCrearTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCrearTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

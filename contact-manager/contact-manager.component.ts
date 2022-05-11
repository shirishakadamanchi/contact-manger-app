import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { Data } from '@angular/router';
import { ValueFromArray } from 'rxjs';
import { myContact } from '../models/myContact';
import { ContactService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
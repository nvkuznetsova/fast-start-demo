import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { AsFormGroupPipe } from '../pipes/as-form-group.pipe';
import { AsFormControlPipe } from '../pipes/as-form-control.pipe';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    AsFormControlPipe,
    AsFormGroupPipe,
  ],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  @Input() public group: FormGroup = new FormGroup({});
}

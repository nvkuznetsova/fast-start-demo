import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-template-driven-from',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule
  ],
  templateUrl: './template-driven-from.component.html',
  styleUrls: ['./template-driven-from.component.scss']
})
export class TemplateDrivenFromComponent {
  public favoriteColor = '';
  public shouldShowCity = false;
  public cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  public userRoles: any[] = [{name: 'Admin', key: 'A'}, {name: 'Manager', key: 'M'}, {name: 'Guest', key: 'G'}];

  public onSubmit(myForm: any): void {
    console.log(myForm.value)
  }
}

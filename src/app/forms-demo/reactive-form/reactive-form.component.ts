import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { tap } from 'rxjs';
import { AddressComponent } from '../address/address.component';
import { AsFormGroupPipe } from '../pipes/as-form-group.pipe';

export const isCitySelected = (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    if (control.value && typeof control.value === 'string') {
      return { selectCity: true };
    }

    return null;
  };

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    RadioButtonModule,
    AddressComponent,
    AsFormGroupPipe,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public favoriteColor = new FormControl('', Validators.required);

  public myForm = this.fb.group({
    username: ['', [
      Validators.required,
      Validators.maxLength(50)
    ]],
    role: ['G'],
    shouldShowCity: [false],
    city: [null]
  });

  public address = this.fb.group({
    addresses: this.fb.array([this.initAddress()])
  });

  public cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  public userRoles: any[] = [{ name: 'Admin', key: 'A' }, { name: 'Manager', key: 'M' }, { name: 'Guest', key: 'G' }];

  public get addresses(): FormArray {
    return this.address.get('addresses') as FormArray;
  }

  public get shouldShowCity(): FormControl {
    return this.myForm.get('shouldShowCity') as FormControl;
  };

  private get city(): FormControl {
    return this.myForm.get('city') as FormControl;
  }

  constructor(private readonly fb: FormBuilder) {}

  public ngOnInit(): void {
    this.shouldShowCity.valueChanges.pipe(
      tap((value) => {
        if (!value) {
          this.city.setValue(null);
        }
      })
    )
      .subscribe();
  }

  public onSubmit(): void {
    console.log(this.myForm.value)
  }

  public addAddress(): void {
    this.addresses.push(this.initAddress())
  }

  private initAddress(): FormGroup {
    return this.fb.group({
      index: [''],
      city: [''],
      street: ['']
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseService} from '../../../../core/services/base.service';

@Component({
  selector: 'app-form-student',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './form-student.component.html',
  styleUrl: './form-student.component.scss'
})
export class FormStudentComponent implements OnInit{

  formGroup!:FormGroup;

  constructor( private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: this.fb.control(null , [Validators.required]),
      lastName: this.fb.control(null , [Validators.required]),
      urlPicture: this.fb.control(null , [Validators.required]),
      matricule: this.fb.control(null , [Validators.required]),
      dateOfBirth: this.fb.control(null , [Validators.required]),
      numbers: this.fb.control(null , [Validators.required]),
      numbersFather: this.fb.control(null , [Validators.required]),
      city: this.fb.control(null , [Validators.required]),
      country: this.fb.control(null , [Validators.required]),
      street: this.fb.control(null , [Validators.required]),
      genre: this.fb.control(null , [Validators.required]),
    })
  }

  handleSaveStudent() {
    console.log(this.formGroup.value);
  }
}

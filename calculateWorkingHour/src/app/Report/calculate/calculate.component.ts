import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { WorkingHourDto } from '../../Models/WorkingHourDto';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  myForms: FormGroup;
  workingHours: WorkingHourDto[];
  workingHour: WorkingHourDto;
    
  constructor(private service: ServiceService, private router: Router, public fb: FormBuilder) {
    this.myForms = this.fb.group({
      idTecnico: ['', [Validators.required]],
      numeroSemana: ['', [Validators.required]],
    });
  }
  ngOnInit() { }

  findData(event: Event) {
    event.preventDefault();
    if (this.myForms.valid) {
      this.service.getWorkingHour(this.myForms.controls['idTecnico'].value, this.myForms.controls['numeroSemana'].value)
        .subscribe(data => {
          this.workingHour=data;
        })
      this.workingHours[0]= this.workingHour;  
    } else {
      this.myForms.markAllAsTouched();
    }
  }

  get idTecnicoField() {
    return this.myForms.get('idTecnico');
  }

  get numeroSemanaField() {
    return this.myForms.get('numeroSemana');
  }


}

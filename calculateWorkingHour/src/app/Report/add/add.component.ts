import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Report } from 'src/app/Models/Report';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm: FormGroup;
  report: Report;

  constructor(private service: ServiceService, private router: Router, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      idTecnico: ['', [Validators.required]],
      idServicio: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      horaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      horaFin: ['', [Validators.required]],
    });
  }
  ngOnInit() { }

  saveData(event: Event) {
    event.preventDefault();
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      
      this.service.saveReport(this.myForm.value)
      .subscribe(data => {
        alert("Se agregó con Exito...!!!");
        //this.route.navigate(["listar"]);
      })     

    } else {
      this.myForm.markAllAsTouched();
    }


    
    
  }


}

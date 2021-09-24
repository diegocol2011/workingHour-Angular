import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  myForm: FormGroup;

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
      this.service.saveReport(this.myForm.value)
        .subscribe(data => {
          alert("Se agregó con Exito...!!!");
          this.router.navigate(["listar"]);
        })
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  get idTecnicoField() {
    return this.myForm.get('idTecnico');
  }

  get idServicioField() {
    return this.myForm.get('idServicio');
  }

  get fechaInicioField() {
    return this.myForm.get('fechaInicio');
  }

  get horaInicioField() {
    return this.myForm.get('horaInicio');
  }

  get fechaFinField() {
    return this.myForm.get('fechaFin');
  }

  get horaFinField() {
    return this.myForm.get('horaFin');
  }

  error: any= { isError: false, errorMessage: '' };

  compareTwoDates() {
    if (new Date(this.myForm.controls['fechaFin'].value) < new Date(this.myForm.controls['fechaInicio'].value)) {
      this.error = { isError: true, errorMessage: 'Fecha inicio debe ser menor que fecha fin' };
    } else {
      this.error = { isError: false, errorMessage: '' };
    }
  }
}

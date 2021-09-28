import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceService } from 'src/app/Service/service.service';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AddComponent
      ],
      providers: [
        ServiceService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    //component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[Form validations]', () => {
    const emptyValue = '';

    it('Control idTecnico with empty value', () => {
      const idTecnicoControl = component.myForm.get('idTecnico');
      const emptyValue = '';
      idTecnicoControl!.setValue(emptyValue);
      expect(idTecnicoControl!.errors).toBeTruthy();
    });

    it('Control idServicio with empty value', () => {
      const idServicioControl = component.myForm.get('idServicio');
      const emptyValue = '';
      idServicioControl!.setValue(emptyValue);
      expect(idServicioControl!.errors).toBeTruthy();
    });

    it('Control fechaInicio with empty value', () => {
      const fechaInicioControl = component.myForm.get('fechaInicio');
      const emptyValue = '';
      fechaInicioControl!.setValue(emptyValue);
      expect(fechaInicioControl!.errors).toBeTruthy();
    });

    it('Control horaInicio with empty value', () => {
      const horaInicioControl = component.myForm.get('horaInicio');
      const emptyValue = '';
      horaInicioControl!.setValue(emptyValue);
      expect(horaInicioControl!.errors).toBeTruthy();
    });

    it('Control fechaFin with empty value', () => {
      const fechaFinControl = component.myForm.get('fechaFin');
      const emptyValue = '';
      fechaFinControl!.setValue(emptyValue);
      expect(fechaFinControl!.errors).toBeTruthy();
    });

    it('Control horaFin with empty value', () => {
      const horaFinControl = component.myForm.get('horaFin');
      const emptyValue = '';
      horaFinControl!.setValue(emptyValue);
      expect(horaFinControl!.errors).toBeTruthy();
    });

  })
});

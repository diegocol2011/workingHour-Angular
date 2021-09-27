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
    component.ngOnInit();
    fixture.detectChanges();
  });

  describe('[Component create]', () => {
    it('should create', () => {
      expect(component).toBeTruthy;
    });
  })


  describe('[Form validations]', () => {

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

  })
});

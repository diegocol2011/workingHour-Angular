import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceService } from 'src/app/Service/service.service';
import { CalculateComponent } from './calculate.component';


describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [ServiceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[Form validations]', () => {

    it('Control idTecnico with empty value', () => {
      const idTecnicoControl = component.myForms.get('idTecnico');
      const emptyValue = '';
      idTecnicoControl!.setValue(emptyValue);
      expect(idTecnicoControl!.errors).toBeTruthy();
    });

    it('Number of week', () => {
      const numeroSemanaControl = component.myForms.get('numeroSemana');
      const weekValue = 52;
      numeroSemanaControl!.setValue(weekValue);
      expect(numeroSemanaControl!.errors).toBeNull();
    })

  });


});

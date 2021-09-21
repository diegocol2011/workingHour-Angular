import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/Models/Report';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  report:Report=new Report();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    //this.Editar();
  }

  // Editar(){
  //   let id = localStorage.getItem("id") || '';
  //   this.service.getPersonaId(parseInt(id))
  //     .subscribe(data=>{
  //       this.persona=data;
  //     })
  // }

  // Actualizar(){
  //   this.service.updatePersona(this.persona)
  //     .subscribe(data=>{
  //       this.persona=data;
  //       alert("Se actualiazo OK");
  //       this.router.navigate(["listar"]);
  //     })    
  // }
}

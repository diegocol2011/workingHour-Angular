import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Report } from 'src/app/Models/Report';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  reports:Report[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getReports()
    .subscribe(data=>{
      this.reports=data;
    })
  }

  Editar(report:Report):void{
    // localStorage.setItem("id",report.id.toString());
    // this.router.navigate(["edit"]);
  }

  Eliminar(report:Report){
    // this.service.deletereport(report)
    //   .subscribe(data=>{
    //     this.reports=this.reports.filter(p=>p!=report);
    //     alert("Usuario Eliminado");
    //   })

  }

}

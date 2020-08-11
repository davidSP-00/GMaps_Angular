import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'
  ]
})
export class MapaComponent implements OnInit {
  marcadores:Marcador[]=[];
  
  lat = -11.949293;
  lng = -77.077900;

  constructor(private _snackBar: MatSnackBar,private dialog:MatDialog) {

 if(localStorage.getItem('marcadores')){
   this.marcadores=JSON.parse(localStorage.getItem('marcadores'));
 }

   }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   
    
  }
  agregarMarcador(evento){
    const coords:{lat:number,lng:number}=evento.coords;
    const nuevoMarcador=new Marcador(coords.lat,coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this._snackBar.open('Marcador agregado','Cerrar', {
      duration: 2000,
    });
  }
  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
  }
  borrarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this._snackBar.open('Marcador eliminado','Cerrar', {
      duration: 2000,
    });
   
  }
  editarMarcador(marcador:Marcador){
    const dialogRef= this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo:marcador.titulo,desc:marcador.desc},
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log('The dialog was closed');
      if(!result){
        return;
      }
      marcador.titulo=result.titulo;
      marcador.desc=result.desc;
      this.guardarStorage();
      this._snackBar.open('Marcador Actualizado','Cerrar', {
        duration: 2000,
      });
    })
  }


}

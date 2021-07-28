import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { Registro } from './registro.model';

@Component({
selector: 'app-persona',
templateUrl: './persona.component.html',
styleUrls: ['./persona.component.css']}
  )

export class PersonaComponent implements OnInit {
  ngOnInit(): void {} 
  constructor(){}

  personas : Persona [] = []

  title = 'Sistema de Competencias'
  saveFactura = true
  siHay = true
  nombre = ""
  caracteristicas = ""
  descripcion_com = ""
  porcentaje = ""
  borrar = 0
  


    agregarRegistro(id:number){ 
      try {
        if(this.nombre != "" && this.caracteristicas != ""){
          let registro = new Registro (this.nombre, this.caracteristicas,this.descripcion_com, this.porcentaje, id)
          this.personas[id].registros.push(registro) 
          this.nombre = ""
          this.caracteristicas = ""
          this.descripcion_com = ""
          this.porcentaje = ""
          this.siHay = false
        }
        return
      }catch (e) {
        console.log('no hay registro para agregar=>', e)
      }
    }

    guardarEquipo(){ 
      try {
          let persona = new Persona (this.personas.length , new Date(), [])
          this.personas.push(persona)
          return
      }catch (e) {
        alert('no hay registro en la formulario para guardar')
      }
    }

    borrarRegistro(){
      try{
        if(this.borrar >= 0){
          this.personas.splice(this.borrar, 1)
        }
      } catch (e) {
        alert('El registro seleccionado no existe')
      }
    }


}

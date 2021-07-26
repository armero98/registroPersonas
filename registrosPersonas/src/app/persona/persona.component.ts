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

  title = 'Sistema de Registro'
  saveFactura = true
  siHay = true
  nombre = ""
  caracteristicas = ""
  borrar = 0
  


    agregarRegistro(id:number){ 
      try {
        if(this.nombre != "" && this.caracteristicas != ""){
          let registro = new Registro (this.nombre, this.caracteristicas, id)
          this.personas[id].registros.push(registro) 
          this.nombre = ""
          this.caracteristicas = ""
        }
        return
      }catch (e) {
        console.log('no hay registro para agregar=>', e)
      }
    }

    guardarEquipo(){ 
      try {
          let persona = new Persona (this.personas.length + 1, new Date(), [])
          this.personas.push(persona)
          return
      }catch (e) {
        alert('no hay registro en la formulario para guardar')
      }
    }

    borrarRegistro(){
      try{
        if(this.borrar >= 0){
          this.personas.pop()
        }
      } catch (e) {
        alert('el registro seleccionado no existe')
      }
    }


}

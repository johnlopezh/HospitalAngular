import { Injectable, Inject } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { DOCUMENT } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: ''
  };

  constructor( @Inject(DOCUMENT) private _document) {
    this.cargarAjuste();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  cargarAjuste() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    } else {
    }
  }
  aplicarTema( tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();

  }
}

// Registringir la información que se va a utilizar
interface Ajustes {
  temaUrl: string;
  tema: string;
}

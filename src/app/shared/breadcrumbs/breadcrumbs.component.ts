import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta
  ) {

      this.getDataRouter().subscribe( evento => {
          console.log ('Evento', evento);
          this.label = evento.titulo;
          this.title.setTitle( this.label);
          let metaTag: MetaDefinition = {
            name: 'description',
            content: this.label
          };
          this.meta.updateTag(metaTag);
      });
  }

  ngOnInit() {

  }
  getDataRouter() {
    return this.router.events
      .pipe(filter( evento => evento instanceof ActivationEnd))
      .pipe(filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ))
      .pipe(map ( (evento: ActivationEnd) => evento.snapshot.data ))
  }

}

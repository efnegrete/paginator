import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
interface Registro {
  codigo: number;
  nombre: string;
  correo: string;
}
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-tabla-ejemplo',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationModule],
  templateUrl: './tabla-ejemplo.component.html',
  styleUrl: './tabla-ejemplo.component.css'
})
export class TablaEjemploComponent {

  contentArray: Registro[] = [];
  returnedArray: Registro[] = [];
  showBoundaryLinks: boolean = true;
  showDirectionLinks: boolean = true;
  constructor() { }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
  ngOnInit(): void {
    this.contentArray = this.generarRegistros(50);
    this.returnedArray = this.contentArray.slice(0, 10);
  }
  generarRegistros(cantidad: number): Registro[] {
    const registros: Registro[] = [];

    for (let i = 1; i <= cantidad; i++) {
      registros.push({
        codigo: i,
        nombre: `Usuario ${i}`,
        correo: `usuario${i}@example.com`,
      });
    }

    return registros;
  }
}
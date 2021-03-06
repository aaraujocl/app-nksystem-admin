import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../model/Vendedor.model';
import { VendedorService } from '../VendedorService.service';

@Component({
  selector: 'app-catalogo-vendedor',
  templateUrl: './catalogo-vendedor.component.html',
  styleUrls: ['./catalogo-vendedor.component.css']
})
export class CatalogoVendedorComponent implements OnInit {

  loading = false;
  titulo = 'Listado de Vendedores';
  lstVendedores:Vendedor[]=[];
  
  constructor(private vendedorService:VendedorService) { }

  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 10;
  tableSizes = [3, 6, 9, 12];
  
  ngOnInit(): void {
    this.listarVendedores();
  }
  listarVendedores(){
    this.loading = true;
    this.vendedorService.listarVendedores('')
   .subscribe(response=>{
     this.lstVendedores = response as Vendedor[];
     console.log(this.lstVendedores);
     this.loading = false;
   })
 }

 onTableDataChange(event){
  this.page = event;
  this.lstVendedores;
}  

onTableSizeChange(event): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.lstVendedores;
} 


}

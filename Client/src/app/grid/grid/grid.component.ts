import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client';
import { ClientsService } from 'src/app/_services/clients.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientsService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients
    }, error =>{
      console.log(error)
    })
  }

}

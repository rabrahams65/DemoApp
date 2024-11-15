import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client';
import { ClientsService } from 'src/app/_services/clients.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientsService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients
    })
  }
}

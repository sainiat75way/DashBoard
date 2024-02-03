import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { Service, Employee, State } from '../service.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  providers: [Service],
})
export class ProjectComponent {
  dataSource: Employee[];

  states: State[];

  events: Array<string> = [];

  constructor(service: Service) {
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }

  logEvent(eventName: string) {
    this.events.unshift(eventName);
  }

  clearEvents() {
    this.events = [];
  }
}


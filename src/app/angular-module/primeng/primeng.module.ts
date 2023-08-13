import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { MenuModule } from 'primeng/menu';
//import { ChipModule } from 'primeng/chip';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
const modules:any[]=[
  MultiSelectModule,
  TableModule,
  InputTextModule,
  ButtonModule,
  TabViewModule,
  CardModule,
  AccordionModule,
  PanelModule,
  DropdownModule,
  MessagesModule,
  MessageModule,
  MenuModule
  //ChipModule
];

@NgModule({
  declarations: [],
  imports: [
    MultiSelectModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    AccordionModule,
    PanelModule,
    //ChipModule
  ],
  exports:[
    MultiSelectModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    CardModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
    PanelModule,
    //ChipModule
  ]
})
export class PrimengModule { }
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
 loading!:BehaviorSubject<boolean>
 constructor(private loaderService:LoaderService){
   this.loading=this.loaderService.isLoading
 }
}

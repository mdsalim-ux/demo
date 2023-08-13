import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  
constructor(private dialog:MatDialog,private http:HttpClient ){
  let url = "https://localhost:1234/api/Student/GetStudents";
  this.http.get(url).subscribe((res: any) => {
    const sortedData = res.sort((a: { studentId: number; }, b: { studentId: number; }) => {
      return a.studentId - b.studentId;
    });
  
    console.log(sortedData, 'sorted data');
  });

  let urls = "https://localhost:1234/api/Student/GetStudents";
  this.http.get(urls).subscribe((res: any) => {
    console.log(res, 'res');
    
  
  });
            
}


openDialog() {
  const dialogRef = this.dialog.open(DialogBoxComponent);
   
  dialogRef.afterClosed().subscribe((result: any) => {
    console.log(`Dialog result: ${result}`);
  });
}
  
}

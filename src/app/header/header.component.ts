import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ColDef, GridApi, GridOptions, INumberFilterParams, ISetFilterParams } from 'ag-grid-community';
import { AlertboxModule } from 'src/app/alertbox/alertbox/alertbox.module';
import { ConfirmalertModule } from 'src/app/alertbox/confirmalert/confirmalert.module';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { LoaderService } from 'src/app/loader/loader.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { TransationModule } from 'src/app/services/transation/transation.module';
import { SignupComponent } from 'src/app/signup/signup.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showFiller = false;
  selectedFile!: File;
  fileSelected: boolean = false;
  isSubmitted: boolean = false;
  isUploaded: boolean = true;
  columnsData: any;
  finalExcelData: any=[];
  SharedData: any;
  ExeclData: any;
  public gridOptions!: GridOptions;
  frameworkComponents: any;
  columnDefs: ColDef[] = [];
  rowData: any;
  private gridApi!: GridApi;
  private ChargridApi!: GridApi;
  emailFormControl!:FormGroup
  suppLang=['en','hn']
  msg: any;
  editEnable: boolean=false;
  selectedData: any;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private loader:LoaderComponent,
    public _translate:TranslateService,
    public translate:TransationModule,
    private dialog:MatDialog,
    public _dialog:AlertboxModule,
    public notification:ToasterService,
    public _confirm:ConfirmalertModule,
    private loaderService:LoaderService,
    )
    {
      _translate.setDefaultLang('en')

      this.gridOptions = <GridOptions>{
        pagination: true,
        paginationPageSize: 5,
      }
    }

  ngOnInit(): void {
    this.dropdownchange(event);
    this.emailFormControl=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]

    })
    this.setColDef();
    this.populateRowData();
  }



  onClick(){
    this.emailFormControl.valid
    this.msg=this.translate.getTranslatelang('Spinner')
    console.log( this.emailFormControl.valid,'Check Status')
  }

  onTabChange(event:any){
    console.log(event,'event')
    if(event.index==1){
      this.router.navigate(['/login'])
    }
    if(event.index==2){
      this.router.navigate(['/sign'])
    }
  }

  dropdownchange(event:any){
    if(event !=undefined){
      if(event.value=="hn"){
        this._translate.setDefaultLang(event.value)
      }
      else{
        this._translate.setDefaultLang('en')
      }
    }
  }

  openDialog() {
    // const dialogRef = this.dialog.open(SignupComponent,{
    //   disableClose:true,
    //   width:'450px',
    //   autoFocus:false,
    // });
    // dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
    this.router.navigate(['/login'])
  }



  browseExcel(event: any) {
    const file = event.target.files[0];
    if (file.name.includes('Excel_Upload') && file.name.endsWith('.xlsx')) {
      const reader: FileReader = new FileReader();
      // reader.onprogress = (e: ProgressEvent<FileReader>) => {
      //   if (e.lengthComputable) {
      //     const progress = Math.round((e.loaded / e.total) * 100);
      //   }
      // };
      reader.onload = (e: any) => {

        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        if (worksheet != undefined) {
          this.fileSelected = true;
          const range = worksheet['!ref'];
          if (range) {
            const startRowIndex = XLSX.utils.decode_range(range).s.r;
            const endRowIndex = XLSX.utils.decode_range(range).e.r;
            const columnRange = XLSX.utils.decode_range(range).e.c;
            this.columnsData = [];
            for (let i = 0; i <= columnRange; i++) {
              const cellAddress = XLSX.utils.encode_cell({ r: 0, c: i });
              const columnName:any = worksheet[cellAddress]?.v;
              if (columnName) {
                const columnData :any= [];
                for (let row = startRowIndex + 1; row <= endRowIndex; row++) {
                  const cellAddress = XLSX.utils.encode_cell({ r: row, c: i });
                  const cellValue = worksheet[cellAddress]?.v;
                  if (cellValue !== undefined) {
                    columnData.push(cellValue);
                  }
                }
                this.columnsData.push({ name: columnName, data: columnData });
                
              }
            }
            this.isUploaded = false;
            
            console.log('Column Data:', this.columnsData);
            let filterEmpty: any = [];
            const foundItems = this.columnsData.filter((item: { name: string }) =>
              item.name === 'Label' || item.name === 'First Name' || item.name === 'Last Name' 
              || item.name === 'Email Address'
            );
            foundItems.forEach((item: { data: any[] }) => {
              filterEmpty.push(...item.data);
            });
            if (filterEmpty.includes("")) {
              this.columnsData = []
              
              this.isUploaded = true;
              this.fileSelected = false;
              let input = {
                'title': '', message: ['Make sure you have filled the following details Email Address,Member Role, SBU,BU,Sector,Enviroment and Label']
              };
              this._dialog.OpenAlert(input, '450px').subscribe((data: any) => {
                if (data) {
                  return
                }
              });
            }
            else {
              var currentURL = document.location.hostname
              this.finalExcelData = this.columnsData
            }
          } else {
            console.log('No defined cells in the worksheet.');
          }

        }
        else {
          alert('File is not relvent')
        }
      };
      reader.readAsArrayBuffer(file);
    }
    else {
      let input = {
        'title': '', message: ['Please upload the revelent excel ']
      };
      this._dialog.OpenAlert(input, '450px').subscribe((data: any) => {
        if (data) {
          this.isUploaded = true;
          this.fileSelected = false;
          return
        }
      });
    }
  }



  setColDef() {
    this.columnDefs = [  
     
      {
        headerName: "Username", field: 'username', sortable: true,filter:false,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      {
        headerName: "Email", field: 'email', sortable: true,editable: true,filter: true,
      },
      {
        headerName: "Phone", field: 'phone', sortable: true, filter: true, editable: true,
      },
      {
        headerName: "Skills", field: 'skills', sortable: true, filter: true,
      }
    ];
    this.frameworkComponents={  
      editRenderer:  HeaderComponent,
    }
  }




  onGridReady(params: any) {
    this.ChargridApi=params.api
    this.ChargridApi.hideOverlay
    params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    this.gridApi.refreshCells(params); 
    this.rowData = this.rowData
    console.log(this.rowData,'row data')
  }
  populateRowData() {
    this.rowData = [
      { Id:1,username: 'Md Salim', email: 'salim@example.com', phone: '123456789', skills: 'Angular,JavaScript, HTML, CSS' },
      { Id:2,username: 'Pankaj Kumar ', email: 'pankaj@example.com', phone: '987654321', skills: 'Python, SQL, Data Analysis' },
      { Id:3,username: 'Kumar Sah', email: 'kumar@example.com', phone: '456789123', skills: 'C#, Spring Boot, Hibernate' },
      { Id:4,username: 'Rahul ', email: 'rahul@example.com', phone: '456789123', skills: 'ASP.NET, Spring Boot, Hibernate' },
      { Id:5,username: 'Suraj', email: 'kusurjamar@example.com', phone: '456789123', skills: 'Java, Spring Boot, Hibernate' },
      { Id:6,username: 'Kumar', email: 'kumar@example.com', phone: '456789123', skills: 'Java, Spring Boot, Hibernate' },
    ];
  }
  getSelectedRow() {
     this.selectedData = this.ChargridApi?.getSelectedRows()?.length;
    if(this.selectedData ==1){
      return true
    }
    else{
      this.editEnable=true
      return false
    }
  }
  deleteRow() {

    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length == 1) {
      this.gridApi.applyTransaction({ remove: selectedRows });
        }
    }
}

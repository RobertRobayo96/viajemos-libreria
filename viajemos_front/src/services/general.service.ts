import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private toast: ToastrService,
    private permissionsServices: NgxPermissionsService,
  ) { }

  
  // Variables globales


  public static WS_URL: string = "http://localhost/viajemos/junior/viajemos_back/public/index.php/api/";

  
  public static get LOGO_URL() : String
  {
    return "http://tatanurrego-001-site1.ctempurl.compublic/media/images/logos/";
  }
  
  public static IMG_URL: string = "http://tatanurrego-001-site1.ctempurl.com/public/index.php/ws/";


  // Mensajes de alerta
  public static ABRIR_CONFIRMACION(): any {
    const observable = new Observable(observer => {
      Swal.fire({
        title: 'Are you sure ?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel!',
        confirmButtonText: 'Confirm!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }
  
  public static get LOGINDATA(): String {
    return JSON.parse(localStorage.getItem("logindata"));
  } 
  
  public static get LOGIN_URL() : String{
    return "http://159.203.175.212/loginuniversalws/public/ws/login/login";
    
  }
  
  abrirMensaje(msg, type)
  {
    let title = "Mensaje";
    if(type == "success")
      title = "Excellent!"
    else
      title = "Registry error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static ABRIR_MENSAJE(msg, type) {
    let title = "Mensaje";
    if (type == "success")
      title = "Good Job!"
    else
      title = "Error"

    Swal.fire(
      title,
      msg,
      type
    );
  }

  public static HEADERS(contenttype: any): any {
    let json;
    if (contenttype == null) {
      json = {
      // 'X-CSRF-TOKEN': "C5OA9OSPrauQoC6W5BGdvvGjJlBZoZQKqBltuT5V",
      };
    } else {
      json = {
       // 'X-CSRF-TOKEN': "C5OA9OSPrauQoC6W5BGdvvGjJlBZoZQKqBltuT5V",
        'Content-Type': contenttype
      };
    }
    return json;
  }

  public ABRIR_NOTIFICACION(msg, msg2, type){
    this.toast.success(msg, msg2,{
      timeOut: 44000,"closeButton": true,
    });    
  }

  public ABRIR_ALERTA(msg, msg2, type){
    this.toast.warning(msg, msg2,{
      timeOut: 44000,"closeButton": true,
    });    
  }


  public exportAsExcelFile(json: any[]): void {
    let excelFileName = "" + Math.floor(Math.random() * 999999999999);
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = {
       Sheets: { 'data': worksheet }, SheetNames: ['data'],
    }     
      
     
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  public static ABRIR_CONFIRMACION_REGISTROS(): any 
  {
    const observable = new Observable(observer => {
      Swal.fire({
        title: '¿Está seguro que desea eliminar el usuario y el registro en NeoFace?',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: '¡Cancelar!',
        confirmButtonText: '¡Confirmar!'
      }).then((result) => {
        if (result.value) {
          observer.next(true);
        }
      });
    });
    return observable;
  }

  public static USERINFO : any = JSON.parse(localStorage.getItem('logindata'));
  
  

}

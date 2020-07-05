// import { Injectable } from '@angular/core';

import { InjectionToken } from '@angular/core';

// declare let toastr:any;

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

export interface Toastr {
    success (msg: string, title?: string): void;
    info (msg: string, title?: string): void;
    warning (msg: string, title?: string): void;
    error (msg: string, title?: string): void;
}
// @Injectable()
// export class ToastrService{
//     success(message:String,title?:string){
//         toastr.success(message,title)
//     }

//     info(message:String,title?:string){
//         toastr.info(message,title)
//     }

//     warning(message:String,title?:string){
//         toastr.warning(message,title)
//     }

//     error(message:String,title?:string){
//         toastr.error(message,title)
//     }
// }

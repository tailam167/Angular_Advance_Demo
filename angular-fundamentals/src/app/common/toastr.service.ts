import { Injectable } from "@angular/core";

declare let toastr: any

@Injectable()
export class ToastrService {
    success(message: string, title?: string) {
        toastr.success(message, title)
    }

    infor(message: string, title?: string) {
        toastr.infor(message, title)
    }

    warning(message: string, title?: string) {
        toastr.warning(message, title)
    }

    error(message: string, title?: string) {
        toastr.error(message, title)
    }
}
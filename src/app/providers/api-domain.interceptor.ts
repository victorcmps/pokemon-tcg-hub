import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiDomainInterceptor implements HttpInterceptor {
	domain: string;
	constructor() {
		this.domain = environment.apiDomain;
	}
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let apiReq = req;
		apiReq = req.clone({ url: this.domain + req.url });

		return next.handle(apiReq);
	}
}

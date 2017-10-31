import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServices {
    constructor(private  http: Http ) { }

    GET(url)  {
        return this.http.get(url).map(res => res.json());
     //  .subscribe( Response =>  data );
    }
}

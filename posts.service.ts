import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class postsService {

    constructor(private http: Http) {
        console.log('Post service initialized.....');
    }

    getPlaceholderJson() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

    getJson() {
        return this.http.get('http://127.0.0.1:4200/getdemojson')
            .map(res => res.json());
    }

    getHello() {
        return this.http.get('http://127.0.0.1:4200/')
            .map(res => res);
    }

    getAdd(data1: number, data2: number) {
        console.log("test", data1, data2);
        return this.http.post('http://127.0.0.1:4200/calc' , {"a" :data1 , "b" : data2})
             .map(res => res.json());
    } 

    /* getAdd(data1: number, data2: number) {
        console.log("test", data1, data2);
        return this.http.get('http://127.0.0.1:4200/calc')
             .map(res => res.json());
    } */

    getLocalJson() {

        return this.http.get('demo.json')
            // return res => res.UserComponent.Post123();
            .map(res => res.json());
    }


}







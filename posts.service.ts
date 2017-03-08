import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class postsService {
    
    constructor(private http: Http) {
        console.log('Post service initialized.....');
    }
    
    getPosts1() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }

    getPosts4() {
        return this.http.get('http://127.0.0.1:8000/calculation')
            .map(res => res.json());
    }

    getposts() {
        return this.http.get('http://127.0.0.1:8000/meena')
            .map(res => res);
    }

    getAdd(data1 : number, data2 : number) {
        console.log("test", data1, data2);

    }
    
    getPosts2() {
  
             return this.http.get('demo.json')
           // return res => res.UserComponent.Post123();
            .map(res => res.json());
    }

    
}







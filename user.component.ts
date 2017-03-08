import { Component } from '@angular/core';
import { postsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [postsService]
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];
    posts123: Post[];
    content: string;
    a: number;
    b: number;
    c: number;
    posts4: Post[];


    constructor(private postsService: postsService) {
        this.name = 'Meena';
        this.email = 'meena@gmail.com';
        this.address = {
            st: 'No.12 Valluvar south street',
            city: 'Madurai',
            state: 'TamilNadu',
        }
        this.hobbies = ['music', 'singing'];
        this.showHobbies = false;

        this.postsService.getPosts1().subscribe(posts => {
            this.posts = posts;
        });

         this.postsService.getPosts4().subscribe(posts => {
            this.posts4 = posts;
        });

        this.postsService.getPosts2().subscribe(posts => {
            //console.log(posts);
            this.posts123 = posts;
        });

        

    }
    show() {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }

    }

    demoRequest() {
        this.postsService.getposts().subscribe(response => {
            console.log(response["_body"]);
        });
        this.postsService.getPosts4().subscribe(posts => {
            this.posts4 = posts;
        });

    }

    add() {
        //console.log(this.a);
        //console.log(this.b);
        this.postsService.getAdd(this.a, this.b);
        // console.log(this.postsService.getPosts4());
    }

    addHobby(hobby: any) {
        this.hobbies.push(hobby);
        //this.hobbies.insert(hobby); 
    }

    delete(i: number) {
        this.hobbies.splice(i, 1);
        //  this.hobbies.pop(i);
    }

}
interface address {
    st: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Post123 {
    Name: string;
    Age: number;
}

interface posts4 {
    a: number;
}

interface body {
    content: string;
}

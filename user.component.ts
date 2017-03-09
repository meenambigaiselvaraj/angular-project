import { Component } from '@angular/core';
import { postsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [postsService]
})
export class UserComponent {
    college: string;
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
    postsAns: Post[];

    constructor(private postsService: postsService) {
        this.college = 'SIT';
        this.name = 'Meena';
        this.email = 'meena@gmail.com';
        this.address = {
            st: 'No.12 Valluvar south street',
            city: 'Madurai',
            state: 'TamilNadu',
        }
        this.hobbies = ['music', 'singing'];
        this.showHobbies = false;
        this.onloadJson();
    }

    onloadJson() {
        this.postsService.getPlaceholderJson().subscribe(posts => {
            this.posts = posts;
        });
        this.postsService.getLocalJson().subscribe(posts => {
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

    demoHello() {
        this.postsService.getHello().subscribe(response => {
            console.log(response["_body"]);
        });
    }

    demoJson() {
        this.postsService.getJson().subscribe(posts => {
            this.posts4 = posts;
        });
    }

    add() {
        this.c = this.a+this.b;
        this.postsService.getAdd(this.a, this.b).subscribe(response => {
            console.log(this.c);
            console.log(response);
        });
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

interface post4 {
    College: string;
    Dept: string;
}

interface postsAns{
    Answer: number;
}

interface body {
    content: string;
}

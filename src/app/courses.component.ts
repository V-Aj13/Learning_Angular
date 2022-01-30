import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector:'courses', //reference <courses>
    //Concatunate with the use of a property
    // we use title from the class
    //The use of back tick to display a list of courses
    //foreach loop in Angular *ngFor="let course of courses
    template: `
    <h2>{{ "Title: " + Title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
})

//Pascal naming convention 
export class CoursesComponent{
    title = "List of courses"

    get Title(){
        return this.title;
    }

    courses;

    //Logic for calling an HTTP service

    constructor(service: CoursesService){
        //we can simplify this by putting it as a parameter
        //let service = new CoursesService();
        this.courses =  service.Courses;
    }
}
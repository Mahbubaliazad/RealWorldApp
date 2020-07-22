import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [
    {
      id: 5,
      name: "Mathematics",
      category: "Weekend",
      level: "Advanced"
    },
    {
      id: 7,
      name: "Computer Science",
      category: "Weekdays",
      level: "Basic"
    }
  ];

  constructor() { }

  onGet() {
    return this.courses;
  }

  onGetCourse(id: number) {
    return this.courses.find(x => x.id === id);
  }

  onAdd(course: Course) {
    this.courses.push(course);
  }

  onDelete(id: number) {
    let course = this.courses.find(x => x.id === id);
    let index = this.courses.indexOf(course!, 0);
    this.courses.splice(index, 1);
  }

  onUpdate(course: Course) {
    let oldCourse = this.courses.find(x => x.id === course.id);
    oldCourse!.name = course.name;
    oldCourse!.category = course.category;
    oldCourse!.level = course.level;
  }
}

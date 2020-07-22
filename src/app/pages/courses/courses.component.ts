import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses!: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.onGet();
  }

  onDelete(id: number) {
    this.courseService.onDelete(id);
  }
}

import { CourseService } from './../../../services/course.service';
import { Course } from 'src/app/models/course.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id!: number;
  header!: string;
  course: Course = {
    id: 0,
    name: '',
    category: '',
    level: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = + this.route.snapshot.paramMap.get('id')!;
    this.header = this.id === 0 ? 'Add Course' : 'Edit Course';

    if (this.id != 0) {
      this.course = this.courseService.onGetCourse(this.id)!;
    }
  }

  onSubmit(form: NgForm) {
    let course: Course = {
      id: form.value.id,
      name: form.value.name,
      category: form.value.category,
      level: form.value.level,
    }

    if (this.id === 0) {
      this.courseService.onAdd(course);
    }
    else {
      this.courseService.onUpdate(course);
    }

    this.router.navigateByUrl('');
  }

}

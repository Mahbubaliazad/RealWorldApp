import { EditComponent } from './pages/courses/edit/edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';


const routes: Routes = [
  {
    path: "",
    component: CoursesComponent
  },
  {
    path: "course/add/:id",
    component: EditComponent
  },
  {
    path: "course/edit/:id",
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

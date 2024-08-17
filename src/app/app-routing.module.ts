import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { PlacementsComponent } from './placements/placements.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path:'courses',component:CoursesComponent},
  {path:'placement',component:PlacementsComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'score',component:ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

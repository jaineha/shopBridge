import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingViewComponent } from './landing-view/landing-view.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },

  {
    path: "landing",
    component: LandingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

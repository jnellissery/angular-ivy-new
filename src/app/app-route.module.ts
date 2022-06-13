import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { userResolver } from './user-resolve.service';
import { UserguardGuard } from './userguard.guard';

const routes: Routes = [
  {
    path: 'home',
    component: UsersComponent,
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [UserguardGuard],
    resolve: { userresolve: userResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
  providers: [userResolver],
})
export class AppRouteModule {}

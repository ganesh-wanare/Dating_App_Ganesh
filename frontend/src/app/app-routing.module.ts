import { ServerErrorComponent } from './error/server-error/server-error.component';
import { TestErrorComponent } from './error/test-error/test-error.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MembersListComponent, canActivate: [AuthGuard] },
      { path: 'members/:id', component: MemberDetailComponent, canActivate: [AuthGuard] },
      { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
      { path: 'messages', component: MessagesComponent }
    ]
  },
  { path: 'errors', component: TestErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent},
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

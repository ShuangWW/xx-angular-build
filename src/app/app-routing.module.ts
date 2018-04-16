import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './error/404/404.component';
import { PageComponent } from './page/page.component';


const routes:Routes=[
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'page',
                component:PageComponent
            },
            {
                path:'module',
                loadChildren:'./module/module.module#ModuleModule'
            }
        ]
    },    
    {
        path:'**',
        component:P404Component
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
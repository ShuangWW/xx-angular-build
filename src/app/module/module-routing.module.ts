import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { ChildSectionComponent } from './section-one/child-section/child-section.component';


const moduleRoutes:Routes=[
    {
        path:'one',
        component:SectionOneComponent
    },
    {
        path:'one/:id',
        component:ChildSectionComponent
    },
    {
        path:'two',
        component:SectionTwoComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(moduleRoutes)],
    exports:[RouterModule]
})

export class ModuleRoutingModule{}
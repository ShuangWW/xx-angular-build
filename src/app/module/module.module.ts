import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { ChildSectionComponent } from './section-one/child-section/child-section.component';

import { ModuleRoutingModule } from './module-routing.module';

@NgModule({
  declarations: [
    SectionOneComponent,
    SectionTwoComponent,
    ChildSectionComponent
],
  imports: [
    FormsModule,
    ModuleRoutingModule
  ],
  providers: []
})
export class ModuleModule { }

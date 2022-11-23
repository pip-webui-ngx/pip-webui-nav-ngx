import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavpartsExampleComponent } from './navparts-example/navparts-example.component';

const appRoutes: Routes = [
    { path: 'navparts', component: NavpartsExampleComponent },
    { path: '**', redirectTo: 'navparts' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

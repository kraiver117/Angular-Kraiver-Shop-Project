import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

import {PageNotFoundRoutingModule} from './page-not-found-routing.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PageNotFoundRoutingModule,
        RouterModule
    ]
})

export class PageNotFoundModule {
}
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContactComponent} from './components/contact/contact.component';

import {ContactRoutingModule} from './contact-routing.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ContactRoutingModule,
        RouterModule
    ]
})

export class ContactModule {
}




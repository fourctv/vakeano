// angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MGListDropDown, JustWatchItem } from './index';

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [
        MGListDropDown
    ],
    providers: [JustWatchItem],
    exports: [FormsModule, CommonModule,
        MGListDropDown
    ]
})
export class MGModule { }

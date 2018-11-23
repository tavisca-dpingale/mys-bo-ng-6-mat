import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatInputModule],
    exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatInputModule],
})

export class MaterialModule{}
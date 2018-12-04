import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatInputModule,MatGridListModule,MatCardModule],
    exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatInputModule,MatGridListModule,MatCardModule],
})

export class MaterialModule{}
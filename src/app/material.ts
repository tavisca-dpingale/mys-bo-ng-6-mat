import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatSidenavModule, MatCardModule, MatListModule } from '@angular/material';



@NgModule({
    imports: [CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule, MatCardModule, MatSidenavModule, MatListModule],
    exports: [CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule, MatCardModule, MatSidenavModule, MatListModule],
})

export class MaterialModule { }
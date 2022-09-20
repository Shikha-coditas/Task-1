import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSortModule
    
    
    
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSortModule
  
    
  ],
  
})
export class MaterialModule { }

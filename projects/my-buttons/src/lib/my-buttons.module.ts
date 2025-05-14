import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';
import { MyButtonsComponent } from './my-buttons.component';

@NgModule({
  declarations: [MyButtonsComponent, FancyButtonComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule, // Import CommonModule here],
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
    ,MatPseudoCheckboxModule,
  MatCheckboxModule ],
  exports: [
    MyButtonsComponent,
    FancyButtonComponent,
    MatInputModule,
    MatProgressSpinnerModule,
    
  ],
})
export class MyButtonsModule {}
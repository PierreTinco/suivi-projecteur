import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ToastComponent } from './toast/toast.component';
import { RouterModule } from '@angular/router';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GenericFormgroupComponent } from './generic-formgroup/generic-formgroup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ToastrModule } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { NgxPaginationModule } from 'ngx-pagination';
registerLocaleData(localeFr);


@NgModule({
  declarations: [LayoutComponent,NavigationComponent,ToastComponent,GenericTableComponent,GenericFormgroupComponent,LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    SimpleModalModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      toastComponent: ToastComponent,
    }),
    NgxPaginationModule
  ],
  exports : [GenericTableComponent,GenericFormgroupComponent,NavigationComponent,LayoutComponent,ReactiveFormsModule,Ng2SearchPipeModule,FormsModule]
})
export class SharedModule { }
 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Primeng
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';

//component
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { RompeLetrasComponent } from './rompe-letras/rompe-letras.component';
import { SopLetrasComponent } from './sop-letras/sop-letras.component';
import { VocabularioComponent } from './vocabulario/vocabulario.component';

//routing
import { EspañolRoutingModule } from './español-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';
import { BoardComponent } from './vocabulario/board/board.component';
import { StateComponent } from './vocabulario/state/state.component';
import { TileComponent } from './vocabulario/tile/tile.component';

@NgModule({
  declarations: [
    AhorcadoComponent,
    MemoramaComponent,
    RompeLetrasComponent,
    SopLetrasComponent,
    VocabularioComponent,
    BoardComponent,
    StateComponent,
    TileComponent
  ],
  imports: [
    CommonModule,
    EspañolRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CommonModule,
    DataViewModule,
    DividerModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    PanelMenuModule,
    RatingModule,
    RippleModule,
    TableModule,
    TagModule,
    ToastModule,
    InputNumberModule,
    PasswordModule,
    RadioButtonModule,
    SelectButtonModule,
    QuicklinkModule
  ]
})
export class EspañolModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasPageComponent } from './pages/tarefas-page/tarefas-page.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { MenuComponent } from './shared/components/menu/menu.component';
import { ModalTarefaComponent } from './components/modal-tarefa/modal-tarefa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TarefasPageComponent,
    MenuComponent,
    ModalTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { MainService } from '../../core/services/main.service';
import { MainAbout, MainFocus, MainHero } from '../../core/interfaces/main.model';
import { AboutComponent } from '../../shared/components/about/about.component';
import { FocusComponent } from '../../shared/components/focus/focus.component';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/interfaces/project.model';
import { MainProjectsComponent } from '../../shared/components/main-projects/main-projects.component';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Contacts, FormContacts } from '../../core/interfaces/contacts.model';
import { ContactsService } from '../../core/services/contacts.service';
import { MainContactsComponent } from '../../shared/components/main-contacts/main-contacts.component';
import { Store } from '@ngrx/store';
import { loadContact } from '../../store/contacts.action';
import { selectContacts } from '../../store/contacts.selector';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    AboutComponent,
    FocusComponent,
    MainProjectsComponent,
    NgIf,
    AsyncPipe,
    MainContactsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  private mainService = inject(MainService);
  private projectService = inject(ProjectService);
  private contactsService = inject(ContactsService);
  private modalService = inject(ModalService);
  private store = inject(Store);

  public mainHero!: MainHero;
  public mainAbout!: MainAbout;
  public mainFocus!: MainFocus[];

  public projects$: Observable<Project[]> = this.projectService.getProjects();
  public MainContacts$: Observable<Contacts> = this.contactsService.getContacts();

  ngOnInit(): void {
    this.mainService.getMain().subscribe((response) => {
      this.mainHero = response.hero;
      this.mainAbout = response.about;
      this.mainFocus = response.focus;
      console.log(this.mainFocus);
      console.log(this.MainContacts$);
    });

    this.store.select(selectContacts).subscribe((response) => {
      if (response) {
        this.modalService.openSuccessModal();
      }
    });
  }

  public postContacts(contact: FormContacts): void {
    this.store.dispatch(loadContact({ contact }));
  }
}

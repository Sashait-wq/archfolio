import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { HeroComponent } from '../../ui/hero/hero.component';
import { MainService } from '../../core/services/main.service';
import { MainAbout, MainFocus, MainHero } from '../../core/interfaces/main.model';
import { AboutComponent } from '../../ui/about/about.component';
import { FocusComponent } from '../../ui/focus/focus.component';
import { ProjectService } from '../../core/services/project.service';
import { Project } from '../../core/interfaces/project.model';
import { MainProjectsComponent } from '../../ui/main-projects/main-projects.component';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { Contacts, FormContacts } from '../../core/interfaces/contacts.model';
import { ContactsService } from '../../core/services/contacts.service';
import { MainContactsComponent } from '../../ui/main-contacts/main-contacts.component';
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
export class MainComponent implements OnInit, OnDestroy {
  private mainService = inject(MainService);
  private projectService = inject(ProjectService);
  private contactsService = inject(ContactsService);
  private modalService = inject(ModalService);
  private store = inject(Store);

  private destroyed$ = new Subject<void>();

  public mainHero!: MainHero;
  public mainAbout!: MainAbout;
  public mainFocus!: MainFocus[];

  public projects$: Observable<Project[]> = this.projectService.getProjects();
  public MainContacts$: Observable<Contacts> = this.contactsService.getContactUs();

  ngOnInit(): void {
    this.mainService
      .getMain()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response) => {
        this.mainHero = response.hero;
        this.mainAbout = response.about;
        this.mainFocus = response.focus;
      });

    this.store
      .select(selectContacts)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response) => {
        if (response) {
          this.modalService.openSuccessModal();
        }
      });

    this.projects$.pipe(takeUntil(this.destroyed$)).subscribe((response) => {
      this.mainHero.images = response.slice(0, 2).map((image) => ({
        id: image.id,
        url: image.image,
        alt: image.alt
      }));
    });
  }

  public postContacts(contact: FormContacts): void {
    this.store.dispatch(loadContact({ contact }));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}

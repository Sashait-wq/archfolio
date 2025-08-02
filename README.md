# Angular Portfolio Project

## Description

This is a multi-page Angular project structured with smart/dumb components architecture. It features NgRx store integration, custom pipes, directives, modular architecture, and multiple pages including a main page, gallery, projects, certifications, and a contact form with full integration.

---

## Project Structure

```
components/
  header/
  footer/

core/
  interfaces/
    contacts.model.ts
    contacts-page.interface.ts
    footer.model.ts
    gallery.model.ts
    main.model.ts
    project.model.ts
    certifications.model.ts
    formContacts.model.ts
  pipes/
    join-titles.pipe.ts
  services/
    base.service.ts
    main.service.ts
    project.service.ts
    contacts.service.ts
    contacts-page.service.ts
    footer.service.ts
    gallery.service.ts
    certifications.service.ts
    modal.service.ts

pages/
  certifications/
  contacts/
  gallery/
  main/
  not-found/
  project-details/
  projects/

shared/
  components/
    success-modal/
      success-modal.component.ts
      success-modal.component.html
      success-modal.component.scss
  directives/
    lazy-load-image.directive.ts

ui/
  about/
  certification-card/
  contact-card/
  focus/
  gallery-grid/
  hero/
  main-contacts/
  main-projects/
  project-preview/

store/
  contacts.action.ts
  contacts.effects.ts
  contacts.reducer.ts
  contacts.selector.ts
```

---

## Interfaces

- `Contacts`
- `FormContacts`
- `ContactsPage`
- `Footer`
- `Gallery`
- `Main` (includes `MainHero`, `MainAbout`, `MainFocus`)
- `Project`
- `Certification`
- `FormModel`

---

## NgRx Store (Contact Form)

**contacts.action.ts**

- `loadContact`
- `loadContactSuccess`
- `loadContactFailure`

**contacts.effects.ts**

- `ContactsEffects`: Submits contact form, saves response to localStorage, shows a modal on success.

**contacts.reducer.ts**

- `ContactsState` with `contact` and `error` state.

**contacts.selector.ts**

- `selectContacts`
- `selectContactsFailure`

---

## Smart Components (pages/)

- `MainComponent`: Loads all sections, connects to store, dispatches form action, and fetches data from services.
- `GalleryComponent`: Paginated gallery (8 images per page).
- `ProjectsComponent`: Paginated projects list (3 per page), navigates to `/projects/:id`.
- `ProjectDetailsComponent`: Displays project details based on ID.
- `CertificationsComponent`: Lists certifications from service.
- `ContactsComponent`: Shows contact data from `contacts-page.service.ts`.

---

## Dumb Components (ui/)

- `HeroComponent`
- `AboutComponent`
- `FocusComponent`
- `MainProjectsComponent`
- `MainContactsComponent`: Includes a validated form, uses `@Output()` to emit `FormContacts`.

```ts
public form = new FormGroup<FormModel>({
  name: new FormControl(null, Validators.required),
  phone: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{10}')]),
  email: new FormControl(null, [Validators.required, Validators.email]),
  interested: new FormControl(null),
  message: new FormControl(null)
});
```

---

## Services (core/services/)

- `base.service.ts`: Base class for HTTP.
- `main.service.ts`: Fetches all data for the main page.
- `project.service.ts`: Handles project list and individual project fetch.
- `contacts.service.ts`: `getContactUs()` and `postContactsUs()`.
- `contacts-page.service.ts`: Supplies data for `/contacts` page.
- `footer.service.ts`: Fetches footer data.
- `gallery.service.ts`: Provides gallery data.
- `certifications.service.ts`: Handles certifications.
- `modal.service.ts`: Manages Angular Material modal dialogs.

---

## Routing

```ts
export const routes: Routes = [
  { path: "", redirectTo: "main", pathMatch: "full" },
  { path: "main", component: MainComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "projects", component: ProjectsComponent },
  {
    path: "projects/:id",
    loadComponent: () =>
      import("./pages/project-details/project-details.component").then(
        (m) => m.ProjectDetailsComponent
      ),
  },
  { path: "certifications", component: CertificationsComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "**", component: NotFoundComponent },
];
```

> Lazy Loading used for `ProjectDetailsComponent`.

---

## Pipes

**JoinTitlesPipe**

```ts
@Pipe({ name: "joinTitles" })
export class JoinTitlesPipe implements PipeTransform {
  transform(value: FocusItem[], separator: string = " / "): string {
    if (!Array.isArray(value)) return "";
    return value.map((item) => item.title).join(separator);
  }
}
```

---

## Directives

**LazyLoadImageDirective**

```ts
@Directive({ selector: "[lazyLoad]" })
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  @Input() lazyLoad!: string;
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.loadImage();
        this.observer.disconnect();
      }
    });
    this.observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    if (this.lazyLoad) this.el.nativeElement.src = this.lazyLoad;
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
```

---

## Modals

**Success Modal**

- Located at `shared/components/success-modal`.
- Triggered after successful contact form submission via NgRx.

---

## Main Page Behavior (MainComponent)

- Fetches `MainHero`, `About`, `Focus` via `mainService`.
- Displays first 2 `projects$` in Hero section.
- Gets `MainContacts$` from `contactsService`.
- Dispatches `loadContact({ contact })` to store.
- On success, opens `SuccessModal`.

---

## Notes

- Project follows a modular structure: `core`, `pages`, `ui`, `store`, `shared`.
- UI components are dumb/presentational.
- Services use DI via `inject()`.

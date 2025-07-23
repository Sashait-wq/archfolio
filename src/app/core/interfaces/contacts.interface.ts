interface ContactsImage {
  url: string;
  alt: string;
}

export interface Contacts {
  title: string;
  description: string;
  image: ContactsImage;
  buttonLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactsForm {
  name: string;
  phone: string;
  email: string;
  Interested: string;
  message: string;
}

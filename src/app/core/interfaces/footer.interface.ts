interface FooterNavigation {
  label: string;
  link: string;
}

interface FooterContact {
  address: string;
  phone: string;
  email: string;
}

interface FooterSocial {
  icon: string;
  link: string;
}

export interface Footer {
  text: string;
  navigation: FooterNavigation[];
  contact: FooterContact;
  social: FooterSocial[];
}

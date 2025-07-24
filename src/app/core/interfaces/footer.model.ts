interface FooterLogo {
  text: string;
}

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
  alt: string;
}

export interface Footer {
  logo: FooterLogo;
  navigation: FooterNavigation[];
  contacts: FooterContact;
  social: FooterSocial[];
  copyright: string;
}

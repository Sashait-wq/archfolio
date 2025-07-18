export interface Images {
  url: string;
  alt: string;
}

export interface MainHero {
  title: string;
  subtitle: string;
  images: Images[];
  buttonLabel: string;
  buttonLink: string;
}

export interface MainAbout {
  title: string;
  text: string;
  images: string[];
  buttonLabel: string;
}

export interface MainFocus {
  id: string;
  title: string;
  description: string;
}

export interface Main {
  hero: MainHero;
  about: MainAbout;
  focus: MainFocus[];
}

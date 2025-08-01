export interface Images {
  id: string;
  url: string;
  alt: string;
}

export interface AboutImages {
  urls: string[];
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
  images: AboutImages;
  buttonLabel: string;
  buttonLink: string;
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

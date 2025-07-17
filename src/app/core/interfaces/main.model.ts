interface MainHero {
  title: string;
  subtitle: string;
  image: string;
  buttonLabel: string;
  buttonLink: string;
}

interface MainAbout {
  title: string;
  text: string;
  images: string[];
  buttonLabel: string;
}

interface MainFocus {
  id: string;
  title: string;
  description: string;
}

export interface Main {
  hero: MainHero;
  about: MainAbout;
  focus: MainFocus[];
}

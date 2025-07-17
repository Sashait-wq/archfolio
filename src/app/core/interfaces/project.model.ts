interface Details {
  location: string;
  year: string;
  client: string;
  architect: string;
  style: string;
  fullDescription: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  details: Details;
}

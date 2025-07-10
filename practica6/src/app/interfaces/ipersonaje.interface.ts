export interface IPersonaje {
  id?: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  image: string;
  avatar: string;
}

export interface IPersonajeResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  results: IPersonaje[];
  data: IPersonaje[];
}


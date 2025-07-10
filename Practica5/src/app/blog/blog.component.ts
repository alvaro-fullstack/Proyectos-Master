import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Noticia {
  titulo: string;
  imagen: string;
  texto: string;
  fecha: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  noticias: Noticia[] = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_TvRcwpKKUbnzSi-lL__xTdfqV9lD8hQ0Q&s',
      texto: 'Este es el contenido de la primera noticia.',
      fecha: new Date().toISOString().split('T')[0]
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://i.ytimg.com/vi/IltMIJeK-1M/maxresdefault.jpg',
      texto: 'Este es el contenido de la segunda noticia.',
      fecha: new Date().toISOString().split('T')[0]
    }
  ];

  nuevaNoticia: Noticia = { titulo: '', imagen: '', texto: '', fecha: '' };

  agregarNoticia() {
    if (
      this.nuevaNoticia.titulo &&
      this.nuevaNoticia.imagen &&
      this.nuevaNoticia.texto &&
      this.nuevaNoticia.fecha
    ) {
      this.noticias.unshift({ ...this.nuevaNoticia });
      this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    } else {
      alert('Todos los campos son obligatorios.');
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { IPersonaje } from '../interfaces/ipersonaje.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  imports: [CommonModule, FormsModule,RouterModule]
})
export class UserDetailComponent implements OnInit {
  user: IPersonaje | any = null; // Almacena los detalles del usuario
  userId: number | null = null; // Añadimos esta propiedad para almacenar el ID

  constructor(
    private route: ActivatedRoute, // Para obtener el ID de la URL
    private userService: UserService, // Para llamar al servicio
    private router: Router // Para redirigir
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID de la URL
    if (id) {
      this.userId = parseInt(id); // Guardamos el ID en la propiedad
      this.userService.getUserById(this.userId).subscribe(
        (data: IPersonaje) => {
          this.user = data; // Asigna los detalles del usuario
        },
        (error) => {
          console.error('Error al obtener los detalles del usuario:', error);
        }
      );
    }
  }

  // Método para eliminar un usuario
  deleteUser(id: number): void {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          alert('Usuario eliminado correctamente');
          this.router.navigate(['/home']); // Redirige al listado después de eliminar
        },
        error: (error) => {
          console.error('Error eliminando usuario:', error);
          alert('Error al eliminar el usuario');
        }
      });
    }
  }

  // Actualizamos el método updateUser para usar el ID almacenado
  updateUser(): void {
    if (this.userId) {
      this.router.navigate(['/updateuser', this.userId]);
    } else {
      console.error('No se encontró el ID del usuario');
    }
  }

  // Método para volver al listado
  goBack(): void {
    this.router.navigate(['/home']);
  }
}


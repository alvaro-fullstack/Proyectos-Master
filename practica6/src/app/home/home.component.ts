import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IPersonaje } from '../interfaces/ipersonaje.interface';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  page: number = 1; 
  pageSize: number = 8;
  totalPages: number = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); // Solo llamamos a loadUsers
  }

  // Método para cargar usuarios
  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: IPersonaje[]) => {
        this.users = response;
        this.calculateTotalPages(); 
      },
      error: (error) => {
        console.error('Error cargando usuarios:', error);
      }
    });
  }

  // Método para eliminar un usuario
  deleteUser(id: number): void {
    const confirmacion = window.confirm('¿Estás seguro de que quieres eliminar este usuario?');
    if (confirmacion) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== id);
        },
        error: (error) => {
          console.error('Error eliminando usuario:', error);
          alert('Error al eliminar el usuario');
        }
      });
    }
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.users.length / this.pageSize);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }
}

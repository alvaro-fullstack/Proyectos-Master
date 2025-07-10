import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IPersonaje } from '../interfaces/ipersonaje.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule]
})
export class UpdateUserComponent implements OnInit {
  updateForm: FormGroup;
  userId: number = 0;
  user: IPersonaje | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.updateForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      image: ['', Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = +id; // Convertir a número usando el operador +
      this.loadUserData();
    } else {
      this.router.navigate(['/home']);
    }
  }

  loadUserData() {
    this.userService.getUserById(this.userId).subscribe({
      next: (data: IPersonaje) => {
        this.user = data;
        // Actualizar el formulario con los datos del usuario
        this.updateForm.patchValue({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          image: data.image
        });
      },
      error: (error) => {
        console.error('Error cargando usuario:', error);
        this.router.navigate(['/home']);
      }
    });
  }

  onSubmit() {
    if (this.updateForm.valid && this.user) {
      const updatedUser = {
        ...this.user,
        ...this.updateForm.value
      };

      this.userService.updateUser(this.userId, updatedUser).subscribe({
        next: (response) => {
          alert('Usuario actualizado correctamente');
          this.router.navigate(['/user', this.userId]);
        },
        error: (error) => {
          console.error('Error actualizando usuario:', error);
          alert('Error al actualizar el usuario. Por favor, intente de nuevo.');
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/user', this.userId]);
  }
}
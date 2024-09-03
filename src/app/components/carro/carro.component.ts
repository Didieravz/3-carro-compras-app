import { Component, Input } from '@angular/core';
import { CarroItem } from '../../model/carroItem';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [],
  templateUrl: './carro.component.html',
})
export class CarroComponent {
  @Input() items: CarroItem[] = [];
}

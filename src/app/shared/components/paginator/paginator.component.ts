import { Component, Input } from '@angular/core';
import { Paginator } from '../../models/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() paginator!: Paginator<unknown>;
}

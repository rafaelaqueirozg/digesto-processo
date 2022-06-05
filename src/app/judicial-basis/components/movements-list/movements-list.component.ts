import { Component, Input, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/models/paginator';
import { MovementInterface } from '../../interfaces/movement.interface';

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.scss'],
})
export class MovementsListComponent implements OnInit {
  @Input()
  movements: MovementInterface[] = [];

  paginator!: Paginator<MovementInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginator(this.movements);
    this.paginator.paginate();
  }
}

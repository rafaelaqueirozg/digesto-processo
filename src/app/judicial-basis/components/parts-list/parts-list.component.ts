import { Component, Input, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/models/paginator';
import { PartsInterface } from '../../interfaces/parts.interface';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.scss'],
})
export class PartsListComponent implements OnInit {
  @Input()
  parts: PartsInterface[] = [];

  paginator!: Paginator<PartsInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginator(this.parts);
    this.paginator.paginate();
  }
}

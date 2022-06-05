import { Component, Input, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/models/paginator';
import { RelatedProcessInterface } from '../../interfaces/related-process.interface';

@Component({
  selector: 'app-related-process-list',
  templateUrl: './related-process-list.component.html',
  styleUrls: ['./related-process-list.component.scss'],
})
export class RelatedProcessListComponent implements OnInit {
  @Input()
  relatedProcesses: RelatedProcessInterface[] = [];

  paginator!: Paginator<RelatedProcessInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginator(this.relatedProcesses);
    this.paginator.paginate();
  }
}

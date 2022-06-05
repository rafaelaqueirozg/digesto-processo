import { Component, Input, OnInit } from '@angular/core';
import { Paginator } from 'src/app/shared/models/paginator';
import { AttachmentInterface } from '../../interfaces/attachment.interface';

@Component({
  selector: 'app-attachments-list',
  templateUrl: './attachments-list.component.html',
  styleUrls: ['./attachments-list.component.scss'],
})
export class AttachmentsListComponent implements OnInit {
  @Input()
  attachments: AttachmentInterface[] = [];

  paginator!: Paginator<AttachmentInterface>;

  ngOnInit(): void {
    this.initPaginator();
  }

  initPaginator(): void {
    this.paginator = new Paginator(this.attachments);
    this.paginator.paginate();
  }
}

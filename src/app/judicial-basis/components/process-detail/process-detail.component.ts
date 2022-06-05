import { Component, Input } from '@angular/core';
import { CnjInterface } from '../../interfaces/cnj.interface';

@Component({
  selector: 'app-process-detail',
  templateUrl: './process-detail.component.html',
  styleUrls: ['./process-detail.component.scss'],
})
export class ProcessDetailComponent {
  @Input()
  process!: CnjInterface;
}

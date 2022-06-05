import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CnjInterface } from '../../interfaces/cnj.interface';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  @Input()
  process$!: Observable<CnjInterface>;
}

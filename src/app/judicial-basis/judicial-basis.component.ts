import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CnjInterface } from './interfaces/cnj.interface';
import { CnjService } from './services/cnj.service';

@Component({
  selector: 'app-judicial-basis',
  templateUrl: './judicial-basis.component.html',
  styleUrls: ['./judicial-basis.component.scss'],
})
export class JudicialBasisComponent {
  process$!: Observable<CnjInterface>;

  constructor(private cnjService: CnjService) {}

  getCnj(cnj: string): void {
    this.process$ = this.cnjService.getProcess(cnj);
  }
}

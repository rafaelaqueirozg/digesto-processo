import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter.interface';
import { AttachmentInterface } from '../interfaces/attachment.interface';
import { Attachment } from '../types/attachment.type';

@Injectable({ providedIn: 'root' })
export class AttachmentAdapter
  implements Adapter<AttachmentInterface, Attachment>
{
  adapt(item: Attachment): AttachmentInterface {
    return {
      id: item[0],
      downloadUrl: item[1],
      type: item[2],
      publicationDate: item[3],
      textContent: item[4],
      obtainingDate: item[5],
      movementId: item[6],
      title: item[7],
    };
  }
}

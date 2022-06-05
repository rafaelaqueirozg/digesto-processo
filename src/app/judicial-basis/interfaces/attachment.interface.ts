import { AttachmentType } from '../types/attachment-type.type';

export interface AttachmentInterface {
  id: number;
  downloadUrl: string;
  type: AttachmentType;
  publicationDate: string;
  textContent: string;
  obtainingDate: string;
  movementId: number;
  title: string;
}

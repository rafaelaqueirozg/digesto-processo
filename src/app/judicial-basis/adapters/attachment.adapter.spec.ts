import { Attachment } from '../types/attachment.type';
import { AttachmentAdapter } from './attachment.adapter';

describe('AttachmentAdapter', () => {
  let adapter = new AttachmentAdapter();

  it('should adapt attachment', () => {
    const attachmentFromApi: Attachment = [
      12,
      'www.test.download.com',
      2,
      '2022-02-10T10:10:10',
      'Lorem ipsmun',
      '2022-02-10T10:10:10',
      12,
      'Attachment Test',
    ];

    const attachmentAdapted = adapter.adapt(attachmentFromApi);

    expect(attachmentAdapted).toEqual({
      id: attachmentFromApi[0],
      downloadUrl: attachmentFromApi[1],
      type: attachmentFromApi[2],
      publicationDate: attachmentFromApi[3],
      textContent: attachmentFromApi[4],
      obtainingDate: attachmentFromApi[5],
      movementId: attachmentFromApi[6],
      title: attachmentFromApi[7],
    });
  });
});

export type EmailType = {
  id: number;
  userId: number;
  gmailMessageId: string;
  subject?: string; // 件名はnull許容なので optional に
  senderAddress: string; // 差出人
  receiverAddress: string; // 受取人
  content: string;
  html_content: string;
  snippet?: string;
  receivedAt?: string; // DateTime はフロントだと string になることが多いです
  isRead: boolean;
  isNotified: boolean;
  customLabel?: string;
  createdAt: string;
};

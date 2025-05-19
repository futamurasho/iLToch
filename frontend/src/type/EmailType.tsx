export type EmailType = {
    id: number;
    userId: number;
    gmailMessageId: string;
    subject?: string;      // 件名はnull許容なので optional に
    senderAddress: string;         // 差出人も optional
    receiverAddress: string;         // 差出人も optional
    content: string;
    snippet?: string;
    receivedAt?: string;   // DateTime はフロントだと string になることが多いです
    isRead: boolean;
    isNotified: boolean;
    customLabel?: string;
    createdAt: string;
  };
  
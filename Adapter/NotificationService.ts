export interface NotificationService {
    send(recipient: string, message: string): void;
}

export class SmsNotificationService implements NotificationService {
    send(recipient: string, message: string): void {
        console.log(`SMS -> ${recipient}: ${message}`)
    }
}

export class TelegramClient {
    sendTelegramMessage(chatId: string, text: string): void {
        console.log(`Telegram -> chat ${chatId}: ${text}`)
    }
}

export class EmailClient {
    sendEmail(emailAddress: string, subject: string, body: string): void {
        console.log(`Email -> ${emailAddress}`);
        console.log(`   Mavzu: ${subject}`);
        console.log(`   Matn:  ${body}`);
    }
}

export class TelegramAdapter implements NotificationService {
    #client: TelegramClient;

    constructor(client: TelegramClient) {
        this.#client = client;
    }

    send(recipient: string, message: string): void {
        this.#client.sendTelegramMessage(recipient, message)
    }
}

export class EmailAdapter implements NotificationService {
    #client: EmailClient;
    #defaultSubject: string;

    constructor(client: EmailClient, defaultSubject: string = "Yangi xabar") {
        this.#client = client;
        this.#defaultSubject = defaultSubject;
    }

    send(recipient: string, message: string): void {
        this.#client.sendEmail(recipient, this.#defaultSubject, message)
    }
}

export class NotificationManager {
    #service: NotificationService;

    constructor(service: NotificationService) {
        this.#service = service;
    }

    notify(recipient: string, message: string): void {
        this.#service.send(recipient, message)
    }
}

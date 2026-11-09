import {
    SmsNotificationService,
    TelegramClient,
    EmailClient,
    TelegramAdapter,
    EmailAdapter,
    NotificationManager,
} from "./NotificationService";

export class AdapterRunner{
    static main(): void{
        const smsManager = new NotificationManager(new SmsNotificationService())
        const telegramManager = new NotificationManager(new TelegramAdapter(new TelegramClient()))
        const emailManager = new NotificationManager(new EmailAdapter(new EmailClient(), "Buyurtma holati"))

        smsManager.notify("+998901234567", "Buyurtmangiz tayyor")
        telegramManager.notify("123456789", "Buyurtmangiz yo'lda")
        emailManager.notify("ali@mail.uz", "Buyurtmangiz yetkazildi")
    }
}

AdapterRunner.main()

export class FlightBooking {
    bookFlight(passenger: string, destination: string): void {
        console.log(`[Aviachipta] ${passenger} uchun ${destination} tomon chipta bron qilindi`)
    }

    cancelFlight(passenger: string): void {
        console.log(`[Aviachipta] ${passenger}ning chiptasi bekor qilindi`)
    }
}

export class HotelBooking {
    bookRoom(passenger: string, hotelName: string): void {
        console.log(`[Mehmonxona] ${passenger} uchun "${hotelName}" mehmonxonasidan xona bron qilindi`)
    }

    cancelRoom(passenger: string): void {
        console.log(`[Mehmonxona] ${passenger}ning xona bronlari bekor qilindi`)
    }
}

export class Payment {
    pay(amount: number): void {
        console.log(`[To'lov] ${amount} so'm to'lov amalga oshirildi`)
    }

    cancelPay(amount: number): void {
        console.log(`[To'lov] ${amount} so'm mijozga qaytarildi`)
    }
}

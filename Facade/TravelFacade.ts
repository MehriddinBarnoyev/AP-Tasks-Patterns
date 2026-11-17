import { FlightBooking, HotelBooking, Payment } from "./TravelServices";

export class TravelFacade {
   private flightBooking: FlightBooking;
    private hotelBooking: HotelBooking;
    private payment: Payment;

    constructor() {
        this.flightBooking = new FlightBooking();
        this.hotelBooking = new HotelBooking();
        this.payment = new Payment();
    }

    bookTrip(passenger: string, destination: string, hotelName: string, amount: number): void {
        console.log(`\n--- ${passenger} uchun sayohat bron qilinmoqda ---`)
        this.flightBooking.bookFlight(passenger, destination)
        this.hotelBooking.bookRoom(passenger, hotelName)
        this.payment.pay(amount)
        console.log(`--- Sayohat muvaffaqiyatli bron qilindi ---`)
    }

    cancelTrip(passenger: string, amount: number): void {
        console.log(`\n--- ${passenger}ning sayohati bekor qilinmoqda ---`)
        this.flightBooking.cancelFlight(passenger)
        this.hotelBooking.cancelRoom(passenger)
        this.payment.cancelPay(amount)
        console.log(`--- Sayohat muvaffaqiyatli bekor qilindi ---`)
    }
}

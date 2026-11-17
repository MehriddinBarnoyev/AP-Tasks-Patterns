import { TravelFacade } from "./TravelFacade";

export class FacadeRunner {
    static main(): void {
        const travel = new TravelFacade()

        travel.bookTrip("Ali", "Dubay", "Atlantis The Palm", 1500)
        travel.cancelTrip("Ali", 1500)
    }
}

FacadeRunner.main()

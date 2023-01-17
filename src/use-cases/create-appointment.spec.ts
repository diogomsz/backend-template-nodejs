import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { getFutureDate } from "../tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointment";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const startsAt = getFutureDate('2022-08-28');
        const endsAt = getFutureDate('2022-08-29')
        
        const createAppointment = new CreateAppointment();

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    });
});

import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";

describe('Create Appointment', () => {
    it('should be able to create an appointment', () => {
        const createAppointment = new CreateAppointment();

        const startsAt = new Date();
        const endsAt = new Date();
    
        // on that line of code the appointment start today and finish tomorrow
        endsAt.setDate(endsAt.getDate() + 1);

        expect(createAppointment.execute({
            customer: 'John Doe',
            startsAt,
            endsAt
        })).resolves.toBeInstanceOf(Appointment);
    });
});

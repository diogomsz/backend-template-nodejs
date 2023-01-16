import { expect, test } from 'vitest';
import { Appointment } from './appointment';

test('create an appointment', () => {

    const startsAt = new Date();
    const endsAt = new Date();

    // on that line of code the appointment start today and finish tomorrow
    endsAt.setDate(endsAt.getDate() + 1);

    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt,
        endsAt
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual('John Doe');
}); 

test('cannot create an appointment with end date before start date', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    // on that line of code the appointment start today and finish yesterday
    endsAt.setDate(endsAt.getDate() - 1);

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        });
    }).toThrow();
});

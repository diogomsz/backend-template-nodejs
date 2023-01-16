import { expect, test } from 'vitest';
import { Appointment } from './appointment';

test('create an appointment', () => {
    const appointment = new Appointment({
        customer: 'John Doe',
        startsAt: new Date(),
        endsAt: new Date(),
    });

    expect(appointment).toBeInstanceOf(Appointment);
    expect(appointment.customer).toEqual('John Doe');
}); 

test('cannot create an appointment with end date before start date', () => {
    const startsAt = new Date();
    const endsAt = new Date();

    // on that situation the appointment start today and finish yesterday
    endsAt.setDate(endsAt.getDate() - 1);

    expect(() => {
        return new Appointment({
            customer: 'John Doe',
            startsAt,
            endsAt
        });
    }).toThrow();
});

export interface IAppointmentProps {
    customer: string;
    startsAt: Date;
    endsAt: Date;
}

export class Appointment {
    private props: IAppointmentProps;

    get customer() {
        return this.props.customer;
    }

    get startsAt() {
        return this.props.startsAt;
    }

    get endsAt() {
        return this.props.endsAt;
    }

    constructor(props: IAppointmentProps) {
        this.props = props;
    }
}

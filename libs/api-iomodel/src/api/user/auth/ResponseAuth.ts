import { AmbrosiaResponse } from '../../AmbrosiaResponse';
import { SessionBase } from './SessionBase';

export interface ResponseProps extends SessionBase {
    userId: number;
}
export class ResponseAuth extends AmbrosiaResponse {
    sessionToken: string;
    userId: number;
    expiration: number;
    constructor(props: ResponseProps) {
        super();
        this.sessionToken = props.sessionToken;
        this.expiration = props.expiration;
        this.userId = props.userId;
    }
}

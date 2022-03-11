import { ResponseAuth, ResponseProps } from '../ResponseAuth';
import { SessionBase } from '../SessionBase';
export class ResponseLogin extends ResponseAuth {
    constructor(props: ResponseProps) {
        super(props);
    }
}

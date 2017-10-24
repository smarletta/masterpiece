import { Context } from './Context';

export class ContextImpl implements Context {
    private port: number;

    constructor() {
        this.port = 20202;
    }

    getPort() : number {
        return this.port;
    }
}
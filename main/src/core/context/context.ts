import { Injectable } from 'fluency-injection'
/**
 * Base server context provides fundamental setup of the server.
 * 
 * @author Sebastiano Marletta
 * @since 2017-10-24
 */
@Injectable
export class Context {
    private port: number;

    constructor() {
        this.port = 20202;
    }

    /**
     * Returns the port on which this context should run.
     * 
     * @returns port of the context
     */
    getPort(): number {
        return this.port;
    }
}
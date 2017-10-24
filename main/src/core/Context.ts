/**
 * Base server context provides fundamental setup of the server.
 * 
 * @author Sebastiano Marletta
 * @since 2017-10-24
 */
export interface Context {
    /**
     * Returns the port on which this context should run.
     * 
     * @returns port of the context
     */
    getPort(): number;

}
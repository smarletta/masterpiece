import { ContextImpl } from '../../src/core/ContextImpl';
import { Context } from '../../src/core/Context';
import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';

@suite
class ContextImplTest {
    private static DEFAULT_PORT: number = 20202;

    @test
    instanceCreation() {
        const context: Context = new ContextImpl();

        assert.isOk(context); 
    }

    @test
    testDefaultPort() {
        const context: Context = new ContextImpl();

        assert.equal(context.getPort(), ContextImplTest.DEFAULT_PORT);
    }
}
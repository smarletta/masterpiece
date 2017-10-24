import { Context } from '../../src/core';
import { assert } from 'chai';
import { suite, test } from 'mocha-typescript';

@suite
class ContextImplTest {
    private static DEFAULT_PORT: number = 20202;

    @test
    instanceCreation() {
        const context: Context = new Context();

        assert.isOk(context); 
    }

    @test
    testDefaultPort() {
        const context: Context = new Context();

        assert.equal(context.getPort(), ContextImplTest.DEFAULT_PORT);
    }
}
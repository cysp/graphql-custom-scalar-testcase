const assert = require('assert');
const { graphql } = require('graphql')
const schema = require('../src/schema-tsdl')

describe('tsdl schema', () => {
  describe('execution', () => {
    it('should parse defaulted input values', async () => {

        const result = await graphql({
            schema: schema.schema,
            source: `query { customScalarField }`,
            rootValue: schema.rootValue,
        })

        assert.equal(result.data.customScalarField, 'OutputValue')
    })

    it('should parse provided input values', async () => {

        const result = await graphql({
            schema: schema.schema,
            source: `query { customScalarField(value: "InputValue") }`,
            rootValue: schema.rootValue,
        })

        assert.equal(result.data.customScalarField, 'OutputValue')
    })
  })
})

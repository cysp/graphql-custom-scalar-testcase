const assert = require('assert');
const { graphql } = require('graphql')
const schema = require('../src/schema-programmatic')

describe('programmatic schema', () => {
  describe('execution', () => {
    it('should parse defaulted input values', async () => {

        const result = await graphql({
            schema: schema.schema,
            source: `query { customScalarField }`,
        })

        assert.equal(result.data.customScalarField, 'OutputValue')
    })

    it('should parse provided input values', async () => {

        const result = await graphql({
            schema: schema.schema,
            source: `query { customScalarField(value: "InputValue") }`,
        })

        assert.equal(result.data.customScalarField, 'OutputValue')
    })
  })
})

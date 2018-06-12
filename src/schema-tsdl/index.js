const { buildSchema } = require('graphql')
const CustomScalar = require('../types/CustomScalar')

const schema = buildSchema(`
scalar CustomScalar

type Query {
    customScalarField(value: CustomScalar = "InputValue"): CustomScalar!
}
`)
Object.assign(schema._typeMap.CustomScalar, CustomScalar)

const rootValue = {
    customScalarField({ value }, ctx, info) {
        return value
    },
}

module.exports = {
    schema,
    rootValue,
}

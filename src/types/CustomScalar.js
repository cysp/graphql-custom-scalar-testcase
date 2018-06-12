const { GraphQLScalarType, Kind: GraphqlASTKind } = require('graphql')


function CustomScalarTypeParseValue(value) {
    if (value === 'InputValue') {
        return { some: { intermediate: 'representation' } }
    }
    throw new Error('Invalid CustomScalar input value')
}

const CustomScalarType = new GraphQLScalarType({
    name: 'CustomScalar',
    serialize(value) {
        if (value.some && value.some.intermediate === 'representation') {
            return 'OutputValue'
        }
        throw new Error('Invalid CustomScalar object')
    },
    parseValue(value) {
        return CustomScalarTypeParseValue(value)
    },
    parseLiteral(valueNode, variables) {
        if (valueNode.kind === GraphqlASTKind.STRING) {
            return CustomScalarTypeParseValue(valueNode.value)
        }
        throw new Error('Invalid CustomScalar input value kind')
    },
})

module.exports = CustomScalarType

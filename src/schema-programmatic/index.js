const { GraphQLSchema } = require('graphql')
const { GraphQLNonNull } = require('graphql')
const { GraphQLObjectType, GraphQLString } = require('graphql')
const CustomScalarType = require('../types/CustomScalar')

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            customScalarField: {
                type: new GraphQLNonNull(CustomScalarType),
                args: {
                    value: {
                        type: CustomScalarType,
                        defaultValue: { some: { intermediate: 'representation' } },
                    },
                },
                resolve(parent, { value }, ctx, info) {
                    return value
                },
            },
        },
    }),
})

module.exports = { 
    schema,
}

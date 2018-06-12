const { graphql } = require('graphql')

const schemaProgrammatic = require('./schema-programmatic')
const schemaTSDL = require('./schema-tsdl')


async function main() {

    const a = await graphql({
        schema: schemaProgrammatic.schema,
        source: `query { customScalarField }`,
    })

    const b = await graphql({
        schema: schemaProgrammatic.schema,
        source: `query { customScalarField(value: "InputValue") }`,
    })

    const c = await graphql({
        schema: schemaTSDL.schema,
        source: `query { customScalarField }`,
        rootValue: schemaTSDL.rootValue,
    })

    const d = await graphql({
        schema: schemaTSDL.schema,
        source: `query { customScalarField(value: "InputValue") }`,
        rootValue: schemaTSDL.rootValue,
    })


    console.log(`p d: ${a.data.customScalarField}`)
    console.log(`p s: ${b.data.customScalarField}`)

    console.log(`s d: ${c.data.customScalarField}`)
    console.log(`s s: ${d.data.customScalarField}`)
}

main()

// https://www.gatsbyjs.com/docs/node-apis/#createPages
import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each pizza and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        pizza: 'is delicious',
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. Pizzas
  await turnPizzasIntoPages(params);
  // Wait for all promises to be resolved before finishing this function
  // 2. Toppings
  // 3. Slicemasters
}

// 1. Get the template
// 2. query all the toppings
// 3. createPage for that topping
// TODO Regex for Topping
// 4. Pass topping data to pizza.js

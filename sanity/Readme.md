- Start Sanit w/ `sanity init --reconfigure`
- To start dev environment: `npm start`

- Get Project ID on https://manage.sanity.io/
- Go Api amd Generate A new Token (choose read only)

- Deploy GraphQL API (IN YOUR SANITY DIRECTORY) 👉 `sanity graphql deploy production` (production is the name of the Dataset)

- To load a sample data `sanity dataset import ./sample-data/all-sample-data.gz production --replace`
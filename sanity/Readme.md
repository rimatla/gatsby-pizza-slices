# Start Sanity Project

- Start Sanity project w/ `sanity init --reconfigure`
- To start dev environment: `npm start`
- `http://localhost:3333`

# Sanity Online Site Settings

- sanity.io
- Get Project ID on https://manage.sanity.io/
- Go Api amd Generate A new Token (choose read only)

# Deploy Changes on terminal

- Deploy GraphQL API (IN YOUR SANITY DIRECTORY) 👉 `sanity graphql deploy production` (production is the name of the Dataset)

# Load a Sample Data

- To load a sample data `sanity dataset import ./sample-data/all-sample-data.gz production --replace`

# Sanity GraphQL Playground

- Get a list of Sanity URL (graphql database): `sanity graphql list`
- Ps: You may need to deploy again to see changes reflected in the Sanity graphql playground (`sanity graphql deploy production`)

# CORS ISSUES

- If you get a `No 'Access-Control-Allow-Origin'`
- Login to sanity.io
- Settings
- API
- Add another url i.e. `http://localhost:8000` or `http://localhost:8888` to the _CORS Origins_ field
- Wanna run on any localhosts? `http://localhost:*`
- Choose Allow Credentials
- Add your netlify full url in there as well after deployment (don't need to allow credentials here)

# Deploy and Build Sanity to Prod

- `sanity deploy`
- Choose a name

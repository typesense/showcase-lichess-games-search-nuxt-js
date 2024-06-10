# ♟️ Instant Lichess Games Search, powered by Typesense and Nuxt

This is a demo that shows how you can use [Typesense](https://github.com/typesense/typesense), along with [Nuxt](https://nuxt.com/), in order to build a search index with near instant results.

## Tech Stack

The app was built using [Nuxt.js](https://nuxt.com/), along with the <a href="https://github.com/typesense/typesense-instantsearch-adapter" target="_blank">
Typesense Adapter for instantsearchjs</a>.

## Development

To run this project locally, check out the `.env.example` file for the environment variables you'll need to configure, install the dependencies and start the Docker image, index the dataset and start the development server.

```shell
pnpm install

# Start the Typesense Docker container

pnpm run typesense:start # or docker-compose up 

# Index the dataset
pnpm run typesense:index
 
# Start the Development server
pnpm run dev
```

Open `http://localhost:3000` to see the app.

For more information, please consult the [Typesense Documentation](https://typesense.org/docs/). 

## Credits

The dataset used in this showcase is from Mitchell Jolly's ([@mitchelljy](https://github.com/mitchelljy)) public dataset of Chess Game Datasest from Lichess, published on [Kaggle](https://www.kaggle.com/datasnaek/chess).

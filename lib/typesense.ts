import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"

export const typesenseInstantsearchAdapter = () => {
  const config = useRuntimeConfig()

  return new TypesenseInstantSearchAdapter({
    server: {
      apiKey: config.public.PUBLIC_TYPESENSE_SEARCH_ONLY || "xyz",
      nodes: [
        {
          host: config.public.PUBLIC_TYPESENSE_HOST || "localhost",
          port: parseInt(config.public.PUBLIC_TYPESENSE_PORT || "8108"),
          protocol: config.public.PUBLIC_TYPESENSE_PROTOCOL || "http",
        },
      ],
    },
    additionalSearchParameters: {
      query_by: "white_id,black_id,opening_name,increment_code",
      num_typos: 0,
    },
  })
}

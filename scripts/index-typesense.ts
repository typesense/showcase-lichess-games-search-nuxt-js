import Typesense from "typesense";
import ChessData from "./data/games.json";
(async () => {
  const typesense = new Typesense.Client({
    apiKey: process.env.TYPESENSE_ADMIN_API_KEY || "xyz",
    nodes: [
      {
        host: process.env.PUBLIC_TYPESENSE_HOST || "localhost",
        port: parseInt(process.env.PUBLIC_TYPESENSE_PORT || "8108"),
        protocol: process.env.PUBLIC_TYPESENSE_PROTOCOL || "http",
      },
    ],
  });

  try {
    await typesense.collections("chess").retrieve();
    console.log("Found existing collection of chess games");

    console.log("Deleting collection");
    await typesense.collections("chess").delete();
  } catch (err) {
    console.error(err);
  }

  console.log("Creating schema...");

  await typesense.collections().create({
    name: "chess",
    enable_nested_fields: true,
    fields: [
      {
        name: "rated",
        type: "bool",
        facet: true,
      },
      {
        name: "created_at",
        type: "int64",
      },
      {
        name: "last_move_at",
        type: "int64",
      },
      {
        name: "turns",
        type: "int32",
        facet: true,
      },
      {
        name: "victory_status",
        type: "string",
        facet: true,
      },
      {
        name: "increment_code",
        type: "string",
        facet: true,
      },
      {
        name: "white_id",
        type: "string",
        facet: true,
      },
      {
        name: "winner",
        type: "string",
        facet: true,
      },
      {
        name: "white_rating",
        type: "int32",
        facet: true,
      },
      {
        name: "black_id",
        type: "string",
        facet: true,
      },
      {
        name: "black_rating",
        type: "int32",
        facet: true,
      },
      {
        name: "opening_eco",
        type: "string",
      },
      {
        name: "opening_name",
        type: "string",
        facet: true,
      },
      {
        name: "opening_ply",
        type: "int32",
        facet: true,
      },
    ],
  });

  console.log("Populating collection...");

  try {
    const returnData = await typesense
      .collections("chess")
      .documents()
      .import(ChessData);

    console.log("Return data: ", returnData);
  } catch (err) {
    console.error(err);
  }
})();

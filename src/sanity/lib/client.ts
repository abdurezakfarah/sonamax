// ./src/sanity/lib/client.ts

import "server-only";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
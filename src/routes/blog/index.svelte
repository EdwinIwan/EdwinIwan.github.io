<script context="module">
  import client from "../../graphql/client";
  import { gql } from "apollo-boost";

  const POSTS = gql`
    query {
      blogs {
        id
        Title
      }
    }
  `;

  export async function preload() {
    return {
      cache: await client.query({
        query: POSTS,
      }),
    };
  }
</script>

<script>
  import { restore, query } from "svelte-apollo";

  export let cache;

  restore(client, POSTS, cache.data);

  const indexPromise = query(client, { query: POSTS });
</script>

<h1>Strapi Blog</h1>

{#await $indexPromise}
  <div>Loading</div>
{:then { data }}
  {#each data.blogs as post}
    <div>{post.Title}</div>
  {/each}
{:catch error}
  <div>Error: {error}</div>
{/await}

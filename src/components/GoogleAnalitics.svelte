<script>
  import { stores } from "@sapper/app";
  import { gaID } from "../config";

  const { page } = stores();

  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", gaID, {
        page_path: $page.path,
      });
    }
  }
</script>

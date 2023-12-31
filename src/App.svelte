<script>
  import Home from "./pages/Home.svelte";
  import Stack from "./pages/Stack.svelte";
  import Nav from "./components/Nav.svelte";
  import "./app.css";
  import { Route, Router } from "svelte-navigator";
</script>

<Router>
  <Nav size="28"></Nav>
  <main class="flex flex-col py-8 w-screen">
    <Route path="/">
      <Home></Home>
    </Route>
    <Route path="/stack">
      <Stack></Stack>
    </Route>
  </main>
</Router>

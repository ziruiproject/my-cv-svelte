<script>
  import NotYet from "./components/NotYet.svelte";
  import Home from "./pages/Home.svelte";
  import Stack from "./pages/Stack.svelte";
  import Nav from "./components/Nav.svelte";
  import "./app.css";
  import { Route, Router } from "svelte-navigator";
</script>

<Router>
  <Nav size="28"></Nav>
  <main class="sm:max-w-lg sm:mx-auto flex flex-col items-center w-screen py-8">
    <Route path="/">
      <Home></Home>
    </Route>
    <Route path="/stack">
      <Stack></Stack>
    </Route>
    <Route path="/about">
      <NotYet title="Coming Soon"></NotYet>
    </Route>
    <Route path="/contact">
      <NotYet title="Coming Soon"></NotYet>
    </Route>
    <Route>
      <NotYet title="Not Found"></NotYet>
    </Route>
  </main>
</Router>

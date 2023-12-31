<script>
  import Nav from "./components/Nav.svelte";
  import "./app.css";
  import { Route, Router, Link } from "svelte-navigator";
  import Home from "./pages/Home.svelte";
</script>

<Nav size="28"></Nav>
<Router>
  <main class="flex flex-col py-8 w-screen">
    <Route path="/" component={Home}></Route>
    <Route path="/stack" component={Home}></Route>
  </main>
</Router>

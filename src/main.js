const app = document.querySelector('#app');
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import { render, router } from "./utilities";

router.on('/', () => render(HomePage, app));
router.on('/projects', () => render(Projects, app));

router.resolve();

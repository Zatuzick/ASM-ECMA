const app = document.querySelector('#app');
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Zalo from "./components/Zalo";
import { render, router } from "./utilities";

router.on('/', () => render(HomePage, app));
router.on('/projects', () => render(Projects, app));
router.on('/zalo', () => render(Zalo, app));

router.resolve();

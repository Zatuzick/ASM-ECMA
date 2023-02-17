const app = document.querySelector('#app');
import HomePage from "./pages/HomePage";
import Zalo from "./components/Zalo";
import { render, router } from "./utilities";
import Project from "./components/ProjectDetail";
import ProjectAdd from "./pages/admin/project/Project-add";
import ProjectsList from "./pages/admin/project/ProjectsList";
import ProjectEdit from "./pages/admin/project/ProjectEdit";
import HomeAdmin from "./pages/admin/HomeAdmin";
import SkillAdd from "./pages/admin/skill/SkillAdd";
import SkillList from "./pages/admin/skill/SkillList";




router.on('/', () => render(HomePage, app));

router.on("/project/:id", ({ data }) => render(() => Project(data), app));
router.on('/zalo', () => render(Zalo, app));
router.on('/HomeAdmin', () => render(HomeAdmin, app));
router.on('/admin/project/add', () => render(ProjectAdd, app));
router.on('/admin/project/list', () => render(ProjectsList, app));
router.on("/admin/project/:id/edit", ({ data }) => render(() => ProjectEdit(data), app));

router.on('/admin/skill/add', () => render(SkillAdd, app));
router.on('/admin/skill/list', () => render(SkillList, app));


router.resolve();

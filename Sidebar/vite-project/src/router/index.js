import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: () => import("../views/Dashboard.vue"),
		},
		{
			path: "/timetracker",
			component: () => import("../views/TimeTracker.vue"),
		},
		{
			path: "/projects",
			component: () => import("../views/Projects.vue"),
		},
		{
			path: "/team",
			component: () => import("../views/Team.vue"),
		},
		{
			path: "/clients",
			component: () => import("../views/Clients.vue"),
		},
		{
			path: "/reports",
			component: () => import("../views/Reports.vue"),
		},
		{
			path: "/settings",
			component: () => import("../views/Settings.vue"),
		},
	],
});

export default router;

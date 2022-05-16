<template>
	<aside :class="`${is_expanded && 'is-expanded'}`">
		<div class="logo"><img src="../assets/logo.svg" alt="ticker" /></div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<!-- <span class="material-symbols-rounded"> menu </span> -->
				<span class="material-symbols-rounded">
					keyboard_double_arrow_right
				</span>
			</button>
		</div>

		<div class="menu">
			<router-link to="/" class="button">
				<!-- <img class="icon" src="../assets/dashboard.png" /> -->
				<span class="material-symbols-rounded"> dashboard </span>
				<span class="text">Dashboard</span>
			</router-link>
			<router-link to="/timetracker" class="button">
				<!-- <img class="icon" src="../assets/timetracker.png" /> -->
				<span class="material-symbols-rounded"> schedule </span>
				<span class="text">Time Tracker</span>
			</router-link>
			<h3>MANAGE</h3>
			<router-link to="/projects" class="button">
				<!-- <img class="icon" src="../assets/projects.png" /> -->
				<span class="material-symbols-rounded"> view_kanban </span>
				<span class="text">Projects</span>
			</router-link>
			<router-link to="/team" class="button">
				<!-- <img class="icon" src="../assets/team.png" /> -->
				<span class="material-symbols-rounded"> group </span>
				<span class="text">Team</span>
			</router-link>
			<router-link to="/clients" class="button">
				<!-- <img class="icon" src="../assets/client.png" /> -->
				<span class="material-symbols-rounded"> person </span>
				<span class="text">Clients</span>
			</router-link>
			<router-link to="/reports" class="button">
				<!-- <img class="icon" src="../assets/reports.png" /> -->
				<span class="material-symbols-rounded"> bar_chart </span>
				<span class="text">Reports</span>
			</router-link>
		</div>

		<div class="flex"></div>
		<div class="menu">
			<router-link to="/settings" class="button">
				<span class="material-symbols-rounded">settings</span>
				<span class="text">Settings</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value;
	localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	width: calc(3rem + 32px);
	min-height: 100vh;
	overflow: hidden;
	padding: 1rem;
	border: solid 1px lightgrey;

	background-color: var(--light);
	color: var(--grey);

	transition: 0.2s ease-out;
	.flex {
		flex: 1 1 0;
	}

	.logo {
		margin-bottom: 1rem;
		img {
			width: 9.5rem;
		}
	}

	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 0.5rem;

		position: relative;
		top: 0;
		transition: 0.2s ease-out;

		.menu-toggle {
			transition: 0.2s ease-out;

			.material-symbols-rounded {
				font-size: 2rem;
				color: var(--blue);
			}

			&:hover {
				.material-symbols-rounded {
					color: var(--primary);
					transform: translateX(0.1rem);
				}
			}
		}
	}

	h3,
	.button .text {
		opacity: 0;
		transition: 0.3s ease-out;
	}
	h3 {
		margin: 1.5rem;
		color: var(--grey);
		font-size: 1rem;
		margin-bottom: 0.1rem;
		margin-top: 1rem;
		padding-left: 1rem;
	}

	.menu {
		margin: 0.1 -1rem;

		.button {
			display: flex;
			align-items: center;
			text-decoration: none;

			padding: 0.5rem 0.5rem;
			padding-left: -2rem;
			transition: 0.2s ease-out;

			.material-symbols-rounded {
				font-size: 2rem;
				color: var(--grey);
				transition: 0.2s ease-out;
			}
			.text {
				color: var(--grey);
				transition: 0.2s ease-out;
				margin-left: 0.5rem;
			}
			&:hover {
				background-color: var(--lightgrey);

				.material-symbols-rounded,
				.text {
					color: var(--primary);
				}
			}
			&.router-link-exact-active {
				background-color: var(--light);
				.material-symbols-rounded,
				.text {
					color: var(--primary);
				}
			}
		}
	}

	&.is-expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3.5rem;
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3,
		.button .text {
			opacity: 1;
		}
		.button {
			.material-symbols-rounded {
				margin-left: 1rem;
			}
		}
	}
}
</style>

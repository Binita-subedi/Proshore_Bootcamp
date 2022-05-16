<template>
	<div class="app">
		<Sidebar />
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
</script>

<style lang="scss">
:root {
	--primary: #fa602d;
	--blue: #040458;
	--light: #ffff;
	--grey: #9d9d9d;
	--lightgrey: #f6f6f6;
	--sidebar-width: 230px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Fira sans", sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 5rem;

		@media (max-width: 768px) {
			padding-left: 1rem;
		}
	}
}
</style>

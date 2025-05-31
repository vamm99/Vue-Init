<template>
  <div class="admin-layout">
    <header>Admin Header</header>
    <aside>Sidebar</aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'sidebar main';
}

header {
  grid-area: header;
  background: #333;
  color: #fff;
  padding: 1rem;
}

aside {
  grid-area: sidebar;
  background: #f4f4f4;
  padding: 1rem;
}

main {
  grid-area: main;
  padding: 1rem;
}
</style>

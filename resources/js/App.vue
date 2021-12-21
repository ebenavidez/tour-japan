<template>
    <div class="text-center">
        <router-link :to="{ name: 'Destinations' }">Destinations</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link>
    </div>
    <router-view />
</template>

<style>
.icon {
    background-color: #2c3e50;
}
.card {
  padding: 20px;
  width: fit-content;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
<script setup lang="ts">
const config = useRuntimeConfig()
const { menu } = useNavigationMenu()

const collapsed = useState<boolean>('collapsed')
const isOnMobile = useState<boolean>('isOnMobile')

function onResize() {
  if (window.innerWidth <= 980) {
    collapsed.value = true
    isOnMobile.value = true
  } else {
    collapsed.value = false
    isOnMobile.value = false
  }
}

function onToggleCollapse() {}

function onItemClick() {}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
</script>

<template>
  <div>
    <sidebar-menu
      v-model:collapsed="collapsed"
      link-component-name="nuxt-sidebar-link"
      :menu="menu"
      :show-one-child="true"
      width="180px"
      width-collapsed="60px"
      @update:collapsed="onToggleCollapse"
      @item-click="onItemClick"
    >
      <template #header>
        <div v-if="!collapsed" class="flex justify-center">
          <img class="m-6 w-8" src="/logo-x.png" alt="LogoX" />
        </div>
        <div v-else>
          <img class="ml-4 mt-6 w-6" src="/logo-x.png" alt="LogoX" />
        </div>
      </template>
      <template #footer>
        <div class="m-2 text-center text-xs text-color-primary">
          <span v-if="!collapsed"
            >app-version {{ config.public.APP_VERSION }}</span
          >
          <span v-if="collapsed">{{ config.public.APP_VERSION }}</span>
        </div>
      </template>
    </sidebar-menu>
    <div
      v-if="isOnMobile && !collapsed"
      class="sidebar-overlay"
      @click="collapsed = true"
    />
  </div>
</template>

<style lang="scss">
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
</style>

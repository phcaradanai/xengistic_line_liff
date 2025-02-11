export function useNavigationMenu() {
  const separator = h('hr')

  const menu = computed(() => {
    return [
      {
        href: '/',
        title: 'Home',
        icon: 'pi pi-fw pi-home',
      },
      {
        component: markRaw(separator),
      },
      {
        href: '/history',
        title: 'History',
        icon: 'pi pi-fw pi-history',
      },
    ]
  })

  return { menu }
}

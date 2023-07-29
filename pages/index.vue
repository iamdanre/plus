<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Camrent360' })
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>

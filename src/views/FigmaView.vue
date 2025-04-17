<script setup lang="ts">
import Panel from '@/components/Panel.vue';
</script>

<template>
  <main class="h-screen flex flex-col">
    <Panel class="flex-1">
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
        width="100%"
        height="100%"
        src="https://embed.figma.com/design/C5Fob4MM5QmjB1Gczq0TfN/Kairos-Demo?node-id=1-2&embed-host=share"
        allowfullscreen
      ></iframe>
    </Panel>
    <Panel class="flex-1">
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1)"
        width="100%"
        height="100%"
        src="https://embed.figma.com/design/C5Fob4MM5QmjB1Gczq0TfN/Kairos-Demo?node-id=37-216&embed-host=share"
        allowfullscreen
      ></iframe>
    </Panel>
  </main>
</template>

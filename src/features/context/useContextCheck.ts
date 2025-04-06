import { onMounted, onUnmounted } from 'vue';
import { useContextStore } from './store';

export function useContextCheck() {
  const contextStore = useContextStore();
  let interval: number;

  const checkContext = () => contextStore.checkAndUpdateContext();

  onMounted(() => {
    // run immediately on mount
    checkContext();

    // then every 10 seconds after
    interval = window.setInterval(checkContext, 10000);
  });

  onUnmounted(() => {
    clearInterval(interval);
  });
}

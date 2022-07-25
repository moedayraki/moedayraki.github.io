import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    scheme: String('')
  }),
  getters: {

  },
  actions: {
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (hasDarkPreference) {
        return 'dark';
      } else {
        return 'light';
      }
    },
    toggleMediaPreference(){
      this.scheme = this.scheme === 'dark' ? 'light' : 'dark';
      document.documentElement.className = this.scheme;
    }
  }
})

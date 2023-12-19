import Vue from 'vue';
import { camelToKebab, reachGoal } from '../libs/tools';

Vue.mixin({
  methods: {
    reachGoal,
    bem(name, mods = {}) {
      const result = [name];
      for (const [mod, value] of Object.entries(mods)) {
        if (value === true) {
          result.push(`${name}_${camelToKebab(mod)}`);
        } else if (value || value === 0) {
          result.push(`${name}_${camelToKebab(mod)}_${camelToKebab(value)}`);
        }
      }
      return result.join(' ');
    },
  },
});

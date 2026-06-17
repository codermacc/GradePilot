import { Storage } from "./storage.js";

export const state = {
  theme: Storage.get("theme", "dark"),
  onboardingComplete: Storage.get("onboardingComplete", false),
};

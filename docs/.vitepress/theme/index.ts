import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ router }) {
    router.onBeforeRouteChange = (to) => {
      console.log("route change to: " + to);
      if (typeof _hmt != "undefined") {
        _hmt.push(["_trackPageview", to]);
      }
    };
  },
};

export default theme;

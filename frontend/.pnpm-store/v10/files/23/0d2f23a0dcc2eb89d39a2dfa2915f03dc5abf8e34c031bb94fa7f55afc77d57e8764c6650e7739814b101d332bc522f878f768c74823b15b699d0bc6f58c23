import chokidar from "chokidar";
import { resolveConfigPath, getConfig, generator } from "@tanstack/router-generator";
function watch(root) {
  const configPath = resolveConfigPath({
    configDirectory: root
  });
  const configWatcher = chokidar.watch(configPath);
  let watcher = new chokidar.FSWatcher({});
  const generatorWatcher = () => {
    const config = getConfig();
    watcher.close();
    console.info(`TSR: Watching routes (${config.routesDirectory})...`);
    watcher = chokidar.watch(config.routesDirectory);
    watcher.on("ready", async () => {
      const handle = async () => {
        try {
          await generator(config, root);
        } catch (err) {
          console.error(err);
          console.info();
        }
      };
      await handle();
      let timeout;
      const deduped = (_file) => {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(handle, 10);
      };
      watcher.on("change", deduped);
      watcher.on("add", deduped);
      watcher.on("unlink", deduped);
    });
  };
  configWatcher.on("ready", generatorWatcher);
  configWatcher.on("change", generatorWatcher);
}
export {
  watch
};
//# sourceMappingURL=watch.js.map

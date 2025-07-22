function getUUID(loop) {
  let uuids = [];
  switch (pageElements.content.main.config.version.value) {
    case "3":
      for (let i = 0; i < loop; i++) {
        uuids.push(uuid.v3(pageElements.content.main.config.v3_5.name.value, pageElements.content.main.config.v3_5.namespace.value));
      };
    case "5":
      for (let i = 0; i < loop; i++) {
        uuids.push(uuid.v5(pageElements.content.main.config.v3_5.name.value, pageElements.content.main.config.v3_5.namespace.value));
      };
    case "1":
      for (let i = 0; i < loop; i++) {
        uuids.push(uuid.v1());
      };
    case "6":
      for (let i = 0; i < loop; i++) {
        uuids.push(uuid.v6());
      };
    case "7":
      for (let i = 0; i < loop; i++) {
        uuids.push(uuid.v7());
      };
    default:
      for (let i = 0; i < loop; i++) {
        uuids.push(uuid.v4());
        let temp = pageElements.content.main.config.spawnBtn.offsetHeight;
      };
  };
  return uuids;
};
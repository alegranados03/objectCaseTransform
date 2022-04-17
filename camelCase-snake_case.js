function camelCaseToSnakeCase(camelObj) {
  const snakeCaseObj = {};
  for (let key in camelObj) {
    const snakeKey = key
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("_");

    if (Array.isArray(camelObj[key])) {
      const newArrayValue = camelObj[key].map((el) => camelCaseToSnakeCase(el));
      snakeCaseObj[snakeKey] = newArrayValue;
    } else if (camelObj[key] instanceof Object) {
      const newObjectValue = camelCaseToSnakeCase(camelObj[key]);
      snakeCaseObj[snakeKey] = newObjectValue;
    } else {
      snakeCaseObj[snakeKey] = camelObj[key];
    }
  }

  return snakeCaseObj;
}

function snakeCaseToCamelCase(snake_obj) {
  const camelCaseObj = {};
  for (let key in snake_obj) {
    const camelKey = key
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

    if (Array.isArray(snake_obj[key])) {
      const oldArray = snake_obj[key];
      const newArrayValue = oldArray.map((el) => snakeCaseToCamelCase(el));
      camelCaseObj[camelKey] = newArrayValue;
    } else if (snake_obj[key] instanceof Object) {
      const newObjectValue = snakeCaseToCamelCase(snake_obj[key]);
      camelCaseObj[camelKey] = newObjectValue;
    } else {
      camelCaseObj[camelKey] = snake_obj[key];
    }
  }
  return camelCaseObj;
}

function getMainList(list) {
  let result = { start: 0, list: [] };
  for (let loop = 0; loop < list.length; loop++) if (list[loop] != "") {
    result.start = loop;
    break;
  }
  for (let loop = list.length; loop > 0; loop--) if (list[loop - 1] != "") {
    result.list = list.slice(result.start, loop);
    break;
  }
  return result;
}

function setNewList(list) {
  list.push(list.shift());
  return list;
}

function setList(data, length) {
  let result = [];
  for (let loop = 0; loop < data.start; loop++)result.push("");
  result = result.concat(data.list);
  for (let loop = result.length; loop < length; loop++)result.push("");
  return result;
}

function getNowTime() {
  const date = new Date();
  let result = Format;
  result = result.replace(/YYYY/g, date.getFullYear());
  result = result.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  result = result.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  result = result.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  result = result.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  result = result.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  return result;
}
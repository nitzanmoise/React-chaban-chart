export function get(callback) {
  fetch("https://nitzan-1edb.restdb.io/rest/cards", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f96ae094b77c1637d147e0d",
      "cache-control": "no-cache",
    },
  })
    .then((e) => e.json())
    .then((data) => callback(data));
}

export function post(payload, cards, callback) {
  fetch("https://nitzan-1edb.restdb.io/rest/cards", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f96ae094b77c1637d147e0d",
      "cache-control": "no-cache",
    },
    body: JSON.stringify(payload),
  })
    .then((e) => e.json())
    .then((data) => {
      callback(cards.concat(data));
    });
}

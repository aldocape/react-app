export async function getHeroes(startIndex = 0, amount = 20, searchText = "") {
  let postFix = "";
  const PUBLIC_KEY = "987f821ab5044c054598b7744de12d23";

  if (searchText) {
    postFix = `&nameStartsWith=${searchText}`;
  }

  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?apikey=${PUBLIC_KEY}&offset=${startIndex}&limit=${amount}${postFix}`
  )
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .catch((e) => console.error(e));
}

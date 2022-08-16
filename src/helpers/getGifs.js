export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=qLMpoHlAN0srdfmBQFpsz9GYo34mgTKw&limit=6&q=${category}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
};
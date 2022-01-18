//
export const getGifs = async (category) => {
    //
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=MI7kNYcjc4Nt806E2vILBl0M4OPvR0Kd`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    // Extraer la data
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url,
        }
    });
    //
    //console.log(gifs);
    //
    return (gifs);
}
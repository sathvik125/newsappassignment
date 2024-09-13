const apikey="key"
export const getTopHeadlines=async(category="general",lang="en",search="") =>{
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?max=100&apikey=${apikey}&category=${category}&lang=${lang}&country=us&q=${search}`);
    const data = await response.json();
    return data.articles; // Returns the list of top headlines
}
export const getNewsData=async(category="general", lang="en", search="example") =>{
    const response = await fetch(`https://gnews.io/api/v4/search?apikey=${apikey}&category=${category}&language=${lang}&q=${search}`);
    const data = await response.json();
    return data.articles; // Returns the list of news articles
}

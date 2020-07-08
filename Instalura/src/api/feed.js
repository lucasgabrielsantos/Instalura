const lerFotos = async (callback) => {
    const fotosHttp = await fetch("http://10.0.2.2:3030/feed");
    const fotosJson = await fotosHttp.json();
    callback(fotosJson);
}

export default lerFotos
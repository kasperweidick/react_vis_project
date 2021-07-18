const fetchData = () => {
    return fetch("https://kasperweidick.pythonanywhere.com/api/data/all")
          .then((response) => response.json())
          .then((data) => console.log(data));}

export default fetchData
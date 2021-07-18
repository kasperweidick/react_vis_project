// const fetchData: any = () => {
//     return fetch("https://kasperweidick.pythonanywhere.com/api/data/all")
//           .then((response) => response.json())
//           .then((data) => data);}

const url = "https://kasperweidick.pythonanywhere.com/api/data/all"

const fetchData: any = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log("error", error);
    }
};
export default fetchData
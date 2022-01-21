/* eslint-disable import/first */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Result from './result'
import GeoLocate from './geolocate'
import Error from "./Error";

// API KEY
const apiKey = "2bd544c159fbdc5021369d273d9cc98a";

const Search = () => {

    // USESTATE HOOKS
    const [query, setQuery] = useState("london") // this is for api
    const [data, setData] = useState({});
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [date, setDate] = useState("");
    var componentMounted = true;

    const handleSubmit = (event) => {
        // prevenDefault() method is used to prevent the browser from executing the default action of the selected element.....In this case on submitting default value of query, i.e, "london" will be rendered again
        event.preventDefault();
        currDate();
        setQuery(input);
    }

    function currDate() {
        let currDate = new Date();
        const options = {
            year: 'numeric',
            day: 'numeric',
            month: 'short'
        }
        
        currDate = currDate.toLocaleDateString('en-US', options);
        setDate(currDate);
    }

    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

    useEffect(() => {

        const fetchData = async () => {
            const resp = await fetch(url);
            if (resp.status === 404) {
                setError(true);
                return;
            }

            if (componentMounted) {
                const data = await resp.json();
                const { temp, temp_min, temp_max } = data.main;
                const { icon, main: weathermood } = data.weather[0];
                const { name } = data;

                const myWeatherInfo = {
                    temp, temp_min, temp_max, weathermood, name, icon
                }
                setData(myWeatherInfo);
            }

            // clean up function
            return () => {
                componentMounted = false;
            }
        }

        fetchData();
    }, [query]) // When query will be changed then only useEffect will be called

    return (
        <>
            {
                error === true ? <Error /> :

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 col-sm-12">
                        <div className="card bg-dark text-white text-center border-0 overflow-auto">
                            <img src={`https://source.unsplash.com/600x900/?${data.weathermood}`} className="card-img image-responsive" alt="..." />
                            <div className="card-img-overlay">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mb-4 w-75 mx-auto">

                                        <input
                                            id="searchBox"
                                            type="text"
                                            name="search"
                                            value={input}
                                            onChange={(val) => { setInput(val.target.value) }}
                                            className="form-control"
                                            placeholder="Search City..."
                                            aria-label="Recipient's username" aria-describedby="basic-addon2"
                                        />
                                        <button type="submit" className="input-group-text" id="basic-addon2">
                                            <i className="fas fa-search"></i>
                                        </button>


                                    </div>
                                </form>

                                {
                                    input === "" 
                                    ? <GeoLocate apiKey={apiKey} date={date}/>
                                    : <Result data={data} date={date}/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                
            }


        </>
    )


};

export default Search;

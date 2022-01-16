/* eslint-disable import/first */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";


// API KEY
const apiKey = "2bd544c159fbdc5021369d273d9cc98a";

const Result = () => {

    // USESTATE HOOKS
    const [query, setQuery] = useState("london") // this is for api
    const [data, setData] = useState({});
    const [input, setInput] = useState("")
    var componentMounted = true;


    // API URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;

    const handleSubmit = (event) => {
        // prevenDefault() method is used to prevent the browser from executing the default action of the selected element.....In this case on submitting default value of query, i.e, "london" will be rendered again
        event.preventDefault();
        setQuery(input);
    }

    useEffect(() => {

        const fetchData = async () => {
            const resp = await fetch(url);

            if (componentMounted) {
                const data = await resp.json();
                const { temp, humiditym, pressure } = data.main;
                const { icon, main: weathermood } = data.weather[0];
                const { name } = data;

                const myWeatherInfo = {
                    temp, humiditym, pressure, weathermood, name, icon
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

        <div className="container mt-5">
            {
                (data === {}) ? (
                    <p>City not found</p>
                ) : (

                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card bg-dark text-white text-center border-0">
                                <img src={`https://source.unsplash.com/600x900/?${data.weathermood}`} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group mb-4 w-75 mx-auto">

                                            <input
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
                                    <div className="bg-dark bg-opacity-50 py-3">
                                        <h1 className="mb-4">{data.name}</h1>
                                    </div>

                                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="bg-dark bg-opacity-50 py-3 carousel-item active">
                                                <p className="card-text">15th Jan 2022</p>
                                                <div>
                                                    <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />
                                                </div>
                                                <h1 className="fw-bolder mb-5">{data.temp}&deg; C</h1>
                                                <p className="fw-bolder mb-0 lead">{data.weathermood}</p>
                                                <p className="lead">30&deg; C  |  35&deg; C</p>
                                            </div>
                                            <div className="bg-dark bg-opacity-50 py-3 carousel-item">
                                                <p className="card-text">15th Jan 2022</p>
                                                <div>
                                                    <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />
                                                </div>
                                                <h1 className="fw-bolder mb-5">{data.temp}&deg; C</h1>
                                                <p className="fw-bolder mb-0 lead">{data.weathermood}</p>
                                                <p className="lead">30&deg; C  |  35&deg; C</p>
                                            </div>
                                            <div className="bg-dark bg-opacity-50 py-3 carousel-item">
                                                <p className="card-text">15th Jan 2022</p>
                                                <div>
                                                    <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />
                                                </div>
                                                <h1 className="fw-bolder mb-5">{data.temp}&deg; C</h1>
                                                <p className="fw-bolder mb-0 lead">{data.weathermood}</p>
                                                <p className="lead">30&deg; C  |  35&deg; C</p>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                )

            }

        </div>
    )


};

export default Result;

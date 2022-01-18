/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import Result from "./result";

const GeoLocate = ({apiKey}) => {

    const [data, setData] = useState({});
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    
    const fetchData = async () => {
        window.navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            console.log(position);
        })
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const data = await res.json();

        const { temp, humiditym, pressure } = data.main;
        const { icon, main: weathermood } = data.weather[0];
        const { name } = data;

        const myWeatherInfo = {
            temp, humiditym, pressure, weathermood, name, icon
        }
        setData(myWeatherInfo);
        console.log(data);
    }

    
    useEffect(() => {
        fetchData();
    }, [lat, lon])
    
    return (
        <>
            <Result data={data} />           
        </>
    )

}

export default GeoLocate;
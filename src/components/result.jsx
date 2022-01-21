const Result = ({ data, date }) => {

    return (
        <div className="container mt-5">
            {
                (data === {}) ? (
                    <p>City not found</p>
                ) : (
                    <div className="bg-dark bg-opacity-50 py-3">
                        <h1 className="mb-4">{data.name}</h1>
                        <p className="card-text">15th Jan 2022</p>
                        <div>
                            <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />
                        </div>
                        <h1 className="fw-bolder mb-5">{data.temp}&deg; C</h1>
                        <p className="fw-bolder mb-0 lead">{data.weathermood}</p>
                        <p className="lead">{data.temp_min}&deg; C  |  {data.temp_max}&deg; C</p>
                    </div>
                )

            }

        </div>
    )
}

export default Result
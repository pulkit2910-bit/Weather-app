const Result = ({ data }) => {

    return (
        <div className="container mt-5">
            {
                (data === {}) ? (
                    <p>City not found</p>
                ) : (
                    <div>
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
                )

            }

        </div>
    )
}

export default Result
import { useStateContext } from "../contexts/ContextProvider";

const WeatherWidget = () => {
  const { loading, error, data, location, setlocation, searchlocation } =
    useStateContext();

  if (loading) {
    return (
      <p className="text-xl font-semibold">Loading weather data...</p>
    );
  }

  if (error) {
    return (
      <p className="text-xl font-semibold">
        {error}!! Please Refresh
      </p>
    );
  }



  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Weather Widget
        </h2>
      </div>
      <div className="mt-4">
        <input
          type="text"
          name="city"
          id="city"
          className="block w-full rounded-md border py-2 px-3 text-gray-900 focus:outline-none placeholder-gray-400 text-sm"
          placeholder="Enter City Name"
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyDown={searchlocation}
        />
      </div>
      
      <div className="text-center mt-4 text-4xl">
        {data.main ? (
          <h1 className="font-medium">
            {Math.round(data.main.feels_like - 273)}°c
          </h1>
        ) : (
          <h1 className="font-medium">Temp (in °c)</h1>
        )}
        {data.name ? <p>{data.name}</p> : <p>City</p>}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="mt-2">
            {data.main ? <span>{data.main.humidity}%</span> : "00 %"}
          </p>
          <p>Humidity</p>
        </div>
        <div>
          <p className="mt-2">
            {data.wind ? (
              <span>{data.wind.speed} Km/h</span>
            ) : (
              <span>00 Km/h</span>
            )}
          </p>
          <p>Wind Speed</p>
        </div>
      </div>
    </>
  );
};

export default WeatherWidget;

// var highTemperatures = [55, 57, 53, 47, 56, 50];
// var lowTemperatures = [33, 30, 29, 35, 31, 32];

// console.log(highTemperatures[0])
// console.log(lowTemperatures[5])

let currentWeather = {
    temperature: {
        high: 48,
        low: 30,
      },
      conditions: "mostly clear",
      astronomy: {
        sunrise: "7:20 AM",
        sunset: "4:48 PM",
}
}
// console.log(currentWeather.temperature)
// console.log(`It's currently ${currentWeather.temperature} degrees and ${currentWeather.conditions}.`)

console.log(currentWeather.temperature.high)
console.log(currentWeather.temperature.low)
console.log(currentWeather.conditions)
console.log(currentWeather.astronomy.sunrise)
console.log(`The temperature today was a high of ${currentWeather.temperature.high} degrees, with a low of ${currentWeather.temperature.low} degrees.
The conditions were ${currentWeather.conditions}.
The sun rose at ${currentWeather.astronomy.sunrise} and set at ${currentWeather.astronomy.sunset}.`)

let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

   console.log(weatherForecast[0].conditions)
   console.log(weatherForecast[1].temperature.high)
   console.log(weatherForecast[1].astronomy.sunrise)
   console.log(weatherForecast[2].conditions)
   console.log(weatherForecast[2].astronomy.sunset)
   console.log(`The high on Sunday will be ${weatherForecast[2].temperature.high} with a low of ${weatherForecast[2].temperature.low} degrees.
   There will also be a ${weatherForecast[2].conditions}. 
   Sunrise is expected at ${weatherForecast[2].astronomy.sunrise} and sunset at ${weatherForecast[2].astronomy.sunset}.`)

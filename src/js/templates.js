export function templatingWeatherArea(city, data) {
    return `<p class="weather-area__data--right weather-area__data--darker">${data.current_condition.date}<br>${data.current_condition.hour}</p>
    <h3 class="weather-area__city">${city}</h3>
    <h2 class="weather-area__tmp">${data.current_condition.tmp} °C <span class="weather-area__data--right weather-area__data--darker">${data.fcst_day_0.tmax}° / ${data.fcst_day_0.tmin}°</span></h2>
    <p class="weather-area__data--darker">Humidité: ${data.current_condition.humidity}%</p>
    <h3>${data.current_condition.condition}</h3>
    <p>Vent: ${data.current_condition.wnd_dir} à ${data.current_condition.wnd_spd} km/h</p>`;
}

export const unknownCityMessage = 
`<p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
    </svg>
    oops! ville inconnue...
</p>`;

export const emptyFieldMessage =
`<p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
    Saisissez une ville.
</p>`;
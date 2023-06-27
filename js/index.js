const test = document.getElementById('location-infos')
const IPLocation = document.querySelector('span[data-IP]')
const dataTimezone = document.querySelector('[data-timezone]')
const dataISP = document.querySelector('[data-ISP]')
const dataLocation = document.querySelector('[data-location]')
const form = document.querySelector('#tracker');
const trackInput = document.querySelector('#tracker-infos [data-track-input]');

let map = L.map('map')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);

let customIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [32, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});

const apiKey = 'at_hYXcaCAp6sLs3YXaFnfOWqYFf2KWz';

document.addEventListener('DOMContentLoaded', () => {
    map.setView([40.7128, -74.0060], 20);
    L.marker([40.7128, -74.0060], { icon: customIcon }).addTo(map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async function (position) {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            map.setView([latitude, longitude], 20);
            L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

            const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&lat=${latitude}&lon=${longitude}`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                IPLocation.textContent = data.ip
                dataTimezone.textContent = data.location.timezone
                dataISP.textContent = data.isp
                dataLocation.textContent = `${data.location.country}, ${data.location.region}, ${data.location.postalCode}`
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let trackInputValue = trackInput.value.trim();

    const regExIP = /^(\d{1,3}\.){3}\d{1,3}$/;
    const regExDomain = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

    if (regExIP.test(trackInputValue)) {

        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_hYXcaCAp6sLs3YXaFnfOWqYFf2KWz&ipAddress=${trackInputValue}`)
            .then(response => response.json())
            .then(data => {
                IPLocation.textContent = data.ip;
                dataTimezone.textContent = data.location.timezone;
                dataISP.textContent = data.isp;
                dataLocation.textContent = `${data.location.country}, ${data.location.region}, ${data.location.postalCode}`;

                let latitude = data.location.lat;
                let longitude = data.location.lng;

                if (data.isp == "") {
                    dataISP.textContent = 'Not Available';
                }

                map.setView([latitude, longitude]);
                L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    } else if (regExDomain.test(trackInputValue)) {
        console.log('É um domínio de site');

        fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${trackInputValue}`)
            .then(response => response.json())
            .then(
                data => {
                    let latitude = data.location.lat
                    let longitude = data.location.lng

                    IPLocation.textContent = data.ip
                    dataTimezone.textContent = data.location.timezone
                    dataISP.textContent = data.isp
                    dataLocation.textContent = `${data.location.country}, ${data.location.region}, ${data.location.postalCode}`

                    map.setView([latitude, longitude]);
                    L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
                }
            )
            .catch(error => {
                console.error('Error:', error);
            })
    } else {
        window.alert('Enter a domain or IP address')
    }
});

const zoomInButton = document.querySelector('.leaflet-control-zoom-in');
const zoomOutButton = document.querySelector('.leaflet-control-zoom-out');
zoomInButton.tabIndex = 3;
zoomOutButton.tabIndex = 4;
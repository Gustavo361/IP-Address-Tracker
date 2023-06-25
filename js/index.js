// // Crie um mapa Leaflet e defina suas configurações iniciais
// var map = L.map('map').setView([51.505, -0.09], 13);

// // Adicione uma camada de mapeamento de sua escolha, como OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
// }).addTo(map);



document.addEventListener('DOMContentLoaded', function () {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        // Faça algo com os valores de latitude e longitude aqui
        let map = L.map('map').setView([latitude, longitude], 20);
        let zoomInButton = document.querySelector('.leaflet-control-zoom-in');
        let zoomOutButton = document.querySelector('.leaflet-control-zoom-out');

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }).addTo(map);

        let customIcon = L.icon({
          iconUrl: '../images/icon-location.svg',
          iconSize: [32, 40],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40]
        });

        // Exemplo de uso do ícone personalizado em um marcador
        L.marker([51.505, -0.09], { icon: customIcon }).addTo(map);

        zoomInButton.tabIndex = 3;
        zoomOutButton.tabIndex = 4;
      },
      function (error) {
        console.log("Ocorreu um erro ao obter a localização:", error);
        map = L.map('map').setView([40.7128, -74.0060], 13);

      }
    );
  } else {
    console.log("Geolocalização não suportada pelo navegador");
    map = L.map('map').setView([40.7128, -74.0060], 1);

  }


});

// document.addEventListener('DOMContentLoaded', function () {
//   let map = L.map('map').setView([40.7128, -74.0060], 13); //ny here
//   let zoomInButton = document.querySelector('.leaflet-control-zoom-in');
//   let zoomOutButton = document.querySelector('.leaflet-control-zoom-out');

//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
//   }).addTo(map);

//   let customIcon = L.icon({
//     iconUrl: '../images/icon-location.svg',
//     iconSize: [32, 40],
//     iconAnchor: [10, 41],
//     popupAnchor: [2, -40]
//   });

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         console.log("Latitude:", latitude);
//         console.log("Longitude:", longitude);

//         // Define a visualização do mapa com base na localização atual
//         map.setView([latitude, longitude], 13);


//         // Exemplo de uso do ícone personalizado em um marcador
//         L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
//       },
//       function (error) {
//         console.log("Ocorreu um erro ao obter a localização:", error);
//       }
//     );
//   } else {
//     console.log("Geolocalização não suportada pelo navegador");
//   }

//   zoomInButton.tabIndex = 3;
//   zoomOutButton.tabIndex = 4;
// });

document.addEventListener('DOMContentLoaded', function () {
  let map = L.map('map').setView([40.7128, -74.0060], 13); //ny here
  let zoomInButton = document.querySelector('.leaflet-control-zoom-in');
  let zoomOutButton = document.querySelector('.leaflet-control-zoom-out');

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  let customIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconSize: [32, 40],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        // Define a visualização do mapa com base na localização atual
        map.setView([latitude, longitude], 20);

        // Exemplo de uso do ícone personalizado em um marcador
        L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
      },
      function (error) {
        console.log("Ocorreu um erro ao obter a localização:", error);

        // Define a visualização do mapa com base em Nova York
        map.setView([40.7128, -74.0060], 20);

        // Exemplo de uso do ícone personalizado em um marcador
        L.marker([40.7128, -74.0060], { icon: customIcon }).addTo(map);
      }
    );
  } else {
    console.log("Geolocalização não suportada pelo navegador");

    // Define a visualização do mapa com base em Nova York
    map.setView([40.7128, -74.0060], 13);

    // Exemplo de uso do ícone personalizado em um marcador
    L.marker([40.7128, -74.0060], { icon: customIcon }).addTo(map);
  }

  zoomInButton.tabIndex = 3;
  zoomOutButton.tabIndex = 4;
});


//   Seus usuários devem ser capazes de:
//   Visualize o layout ideal para cada página, dependendo do tamanho da tela do dispositivo
//   Veja os estados de foco para todos os elementos interativos na página ✔
//   Veja seu próprio endereço IP no mapa no carregamento da página inicial ✔ 
//   Pesquise endereços IP ou domínios e veja as principais informações e localização

// const IPLocation = document.querySelector('span[data-IP]')

const test = document.getElementById('location-infos')

const IPLocation = document.querySelector('#tracker-infos span[data-IP]');
// const location = document
const dataTimezone = document.querySelector('[data-timezone]')
// const dataRegion = document.querySelector('[data-location-region]')
const dataISP = document.querySelector('[data-ISP]')
// const dataLocationCountry = document.querySelector('[data-location-country]')

const dataLocation = document.querySelector('[data-location]')





// trackButton.addEventListener('submit', (e) => {
//   e.preventDefault()
//   let trackButtonValue = trackButton.value

//   const regExIP = /^(\d{1,3}\.){3}\d{1,3}$/
//   const regExDomain = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/
//   if (regExIP.test(trackButtonValue)) {
//     console.log('é IP')
//     // e.preventDefault()
//   } else if (regExDomain.test(trackButtonValue)) {
//     console.log('é dominio')
//     // e.preventDefault()
//   } else {
//     console.log('Texto inválido')
//     // e.preventDefault()
//   }

// })
// const trackButton = document.querySelector('#tracker-infos [data-track-btn]');
const form = document.querySelector('#tracker');

// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // Evita o envio padrão do formulário

//   // const trackInput = form.querySelector('input[type="text"]');
//   const trackButtonValue = trackButton.value.trim()
//   const trackValue = trackInput.value;

//   const regExIP = /^(\d{1,3}\.){3}\d{1,3}$/;
//   const regExDomain = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

//   if (regExIP.test(trackValue)) {
//     console.log('É um endereço IP');
//     /* 
//     pegar dominio do site 
//     ISP.
//     TIMEZONE.
//     LOCATION.
//     */
//     fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_hYXcaCAp6sLs3YXaFnfOWqYFf2KWz&ipAddress=${trackButtonValue}`)
//     .then(response => response.json())
//     .then(data => {
//       // console.log(data)

//       IPLocation.textContent = data.ip
//       dataTimezone.textContent = data.location.timezone
//       dataISP.textContent = data.isp
//       dataLocation.textContent = `${data.location.country}, ${data.location.region}, n°dacasa`

//       // console.log(data.location.region)
//       // console.log(data.location.country)
//       // console.log(typeof data.isp)

//       if (data.isp == "") {
//         dataISP.textContent = 'Not Available'
//       }
//     })
//   } else if (regExDomain.test(trackValue)) {
//     console.log('É um domínio de site');
//     /*
//     pegar IP
//     ISP
//     TIMEZONE
//     LOCATION
//     */
//   } else {
//     console.log('Texto inválido');
//   }
// });


form.addEventListener('submit', (e) => {
  const trackButton = document.querySelector('#tracker-infos [data-track-input]');
  e.preventDefault(); // Evita o envio padrão do formulário

  const trackButtonValue = trackButton.value.trim();
  // const trackValue = trackButtonValue;
  // console.log(typeof trackButtonValue)

  const regExIP = /^(\d{1,3}\.){3}\d{1,3}$/;
  const regExDomain = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
  // const regExIP = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
  // const regExDomain = /^[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

  if (regExIP.test(trackButtonValue)) {
    console.log('É um endereço IP');
    console.log(typeof trackButtonValue);
    /* 
    pegar dominio do site 
    ISP.
    TIMEZONE.
    LOCATION.
    */
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_hYXcaCAp6sLs3YXaFnfOWqYFf2KWz&ipAddress=${trackButtonValue}`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)

        IPLocation.textContent = data.ip
        dataTimezone.textContent = data.location.timezone
        dataISP.textContent = data.isp
        dataLocation.textContent = `${data.location.country}, ${data.location.region}, n°dacasa`

        // console.log(data.location.region)
        // console.log(data.location.country)
        // console.log(typeof data.isp)

        if (data.isp == "") {
          dataISP.textContent = 'Not Available'
        }
      })
  } else if (regExDomain.test(trackButtonValue)) {
    console.log('É um domínio de site');
    /*
    pegar IP
    ISP
    TIMEZONE
    LOCATION
    */
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_hYXcaCAp6sLs3YXaFnfOWqYFf2KWz&domain=${trackButtonValue}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        IPLocation.textContent = data.ip
        dataTimezone.textContent = data.location.timezone
        dataISP.textContent = data.isp
        dataLocation.textContent = `${data.location.country}, ${data.location.region}, n°dacasa`
        // dataLocationCountry.textContent = data.location.country
        // dataRegion.textContent = data.location.region
        // console.log(data.location.region)
        // console.log(data.location.country)
        // console.log(typeof data.isp)
      })
  } else {
    console.log('Texto inválido');
  }
});

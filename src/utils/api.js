const API_ROOT_URL = 'https://developers.zomato.com/api/v2.1';
const API_KEY = process.env.API_KEY;
const DEFAULT_CITY = process.env.CITY;

const buildOptions = () => ({
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'user-key': API_KEY
  }
});

const handleResponse = (response) => {
  if (response.ok) {
    return response;
  }
  throw Error(response.statusText);
};

const getDefaultCity = (city) => {
  const url = `${API_ROOT_URL}/locations?query=${city}`;  

  return fetch(url, buildOptions())
    .then(response => handleResponse(response))
    .then(response => response.json());
};

const getCity = () => 
  getDefaultCity(DEFAULT_CITY)
    .then(response => {

      if (response.status === 'success' && response.location_suggestions && response.location_suggestions.length > 0) {
        return response.location_suggestions[0];
      }
      return Promise.reject(new Error('Missing location'));

    });

const getCityDetails = ({entity_id, entity_type}) => {
  const url = `${API_ROOT_URL}/location_details?entity_id=${entity_id}&entity_type=${entity_type}`;  

  return fetch(url, buildOptions())
    .then(response => handleResponse(response))
    .then(response => response.json())
    .then(data => { console.log(data); return data; }) // test purposes
    .then(data => 
        data.best_rated_restaurant.map( x => ({          
          name: x.restaurant.name,
          cuisines: x.restaurant.cuisines,
          image: x.restaurant.featured_image,
          establishment: x.restaurant.establishment.join(','),
          rating: x.restaurant.user_rating.aggregate_rating,
          votes: x.restaurant.user_rating.votes,
          timings: x.restaurant.timings,
          cost: x.restaurant.average_cost_for_two,
          location: x.restaurant.location.locality
        }))
    )
    .then(data => { console.log(data); return data; }); // test purposes
};

export const validateAPIParameters = () => {
  return typeof(process.env.API_KEY) != 'undefined' && typeof(process.env.CITY) != 'undefined';
};

export const getBestRestaurants = () => 
  getCity()
    .then(response => getCityDetails(response));


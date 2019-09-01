import { getBestRestaurants, validateAPIParameters } from '../../utils/api';
import { missingParametersTemplate, fetchErrorTemplate } from './errors.restaurants';
import { missingImage } from './image.helper';

const restaurantTemplate = (data) => {

  const { name, cuisines, image, location, establishment, cost, rating, votes } = data;

  return `
    <div class="restaurant-card ml-3 mt-3 mb-3">
      
      <div class="body">
        <div class="container">

          <div class="row pt-2 pb-2">
            <div class="col">
              <img src=${image === '' ? missingImage(): image} class="card-img-top logo" alt=${name}>
            </div>
            <div class="col-8 pl-0 pr-0">

              <div class="row pl-0 pr-0">
                <div class="col-8 ml-0 mr-0">
                  <h5 class="card-title">${name}</h5>                  
                </div>
                <div class="col">
                  <svg class="score" width=80 height=36 >
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${rating} / 5 </text>
                  </svg>
                  <small class="votes">${votes} votes</small>
                </div>
              </div>                          
              <div class="footer">
                <small>${location} &middot; ${establishment}</small><br>
                <div class="separator">
                  <small class="time">Open Now </small>&middot; <small class="cuisines">${cuisines}</small> &middot; <small class="text-muted">Costs $${cost} for two</small>
                </div>
              </div>                            

            </div>
          </div>

        </div>              

      </div>

    </div>  
  `;  

};

export const renderRestaurants = (elementId) => {

  const domElement = document.getElementById(elementId);
  domElement.innerHTML = `
    <result-view title="Zomato" >
      <p>Loading...</p>
    </result-view>`;

  if (validateAPIParameters()) {

    getBestRestaurants()
      .then(response => {

        const elements = response.reduce((html, item) => html + restaurantTemplate(item), '');
        domElement.innerHTML = `<result-view title="Zomato" >${elements}</result-view>`;

      })
      .catch(error => {
        console.log(error);
        domElement.innerHTML = `<result-view title="Zomato" >${fetchErrorTemplate(error)}</result-view>`;     

      });    

  } else {
    domElement.innerHTML = `<result-view title="Zomato" >${missingParametersTemplate()}</result-view>`;    
  }

};

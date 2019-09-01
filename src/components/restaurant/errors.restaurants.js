
const genericErrorTemplate = ({ title, message }) => {

  return `
    <div class="restaurant-card card w-25 ml-3 mt-3 mb-3">
      
      <div class="body">
        <div class="container">

          <div class="row pt-2 pb-2">
            <div class="col">
              <div class="row">
                <div class="col-8">
                  <h5 class="card-title">${title}</h5>                  
                </div>
                <div class="col">
                  <svg class="score failed" width=80 height=36 >
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"> Failed </text>
                  </svg>
                </div>
              </div>                          
              <div class="footer">
                <small>${message}</small><br>
              </div>                            

            </div>
          </div>

        </div>              

      </div>

    </div>  
  `;  

};

export const missingParametersTemplate = () => {

  return genericErrorTemplate({ 
    title: 'Missing parameters',
    message: 'You need to specify API_KEY and CITY env vars'
  });

};

export const fetchErrorTemplate = (err) => {

  return genericErrorTemplate({ 
    title: 'Error retrieving data',
    message: err.message
  });

};


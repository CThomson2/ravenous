const apikey = 'lsB5nNle7l7yurUXKzW5hyBiXd-hzXcHjov0WwR0uWPxgRd1yFNeRFohADcG0Z8Rohv_TLbyN-cAe2Zi1Nk_ST0PY-RcMjiPnsbAo76GAb-t5C-Me0GPssIVURCpYnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      'https://cors-anywhere.herokuapp.com/' + `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apikey}` } }
    )
      .then(res => res.json())
      .then(jsonRes => {
        if (jsonRes.businesses) {
          return jsonRes.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          })
        }
      })
  }
}

export default Yelp;
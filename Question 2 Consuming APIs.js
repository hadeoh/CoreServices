//company ID: 484929849
//customer ID: 573839293
const { default: axios } = require('axios');

function refundCustomer(company, user, amount) {
  let wallet = makePostRequest('https://api.okra.ng/v2/mock-api/fetch-wallet', { id: user })
  let pay = makePostRequest('https://api.okra.ng/v2/mock-api/pay', {from_id: company, to_id: user, amount})
  axios.all([wallet, pay])
  .then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    console.log("wallet_before => ", responseOne.data.data.wallet, "\nwallet_after =>", responseTwo.data.data.wallets.to)
  })).catch(errors => {
    console.error("Error: ", errors)
  })
}

function makePostRequest(url, data) {
  return axios.post(url, data);
}
  
refundCustomer('484929849', '573839293', 2003.0)
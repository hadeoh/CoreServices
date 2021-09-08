const { default: axios } = require('axios');

async function getUserInfo(username, password) {
    const user = await makePostRequest('https://api.okra.ng/v2/mock-api/login', {username, password})
    const userProfile = user.data.data.profile
    // const userRefereshWallet = await makePostRequest('https://api.okra.ng/v2/mock-api/refresh-wallet', {wallet_id: userProfile.id, variable: 'variable'})
    // userRefereshWallet = userRefereshWallet.data
    let logout = await axios.get('https://api.okra.ng/v2/mock-api/logout')
    logout = logout.data.message
    console.log('user_name: ', userProfile.name, '\nuser_id: ', 
    userProfile.id, '\nuser_wallet_amount_before: ', userProfile.wallet.amount.toString(), '\nuser_wallet_amount_after: ', 
    '\nlogout_message: ', logout);
}

function makePostRequest(url, data) {
  return axios.post(url, data);
}

getUserInfo('okra_user', 'okra_pass')

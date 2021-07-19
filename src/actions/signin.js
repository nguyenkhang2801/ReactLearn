const SIGN_IN = 'SIGN_IN';

export const addDataSignin = (signin) => {
  return {
    type: SIGN_IN,
    payload: signin,
  }
}
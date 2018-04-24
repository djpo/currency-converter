export default function fetchRates() {
  return async (dispatch, getState) => {
    try {
      // display LoadingLayer
      dispatch({ type: 'LOADING_START' });

      // prepare request
      const fetchUrl = 'https://txf-ecb.glitch.me/rates';
      const fetchOptions = { method: 'GET' };

      // send request
      const res = await fetch(fetchUrl, fetchOptions);

      // handle response
      if (res.status === 200) {
        const data = await res.json();

        // uupdate rates in redux store
        dispatch({ type: 'UPDATE_RATES', rates: data.rates });
      }

      // remove LoadingLayer
      dispatch({ type: 'LOADING_STOP' });

    } catch (error) { console.error(error); }
  };
}

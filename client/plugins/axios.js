
import {ErrorResponse, SuccessResponse} from "~/utils/response";


export default function ({ $axios, redirect, store, $nuxt }) {

  let requestsPending = 0;
  const req = {
    pending: () => {
      requestsPending++;
      store.dispatch('template/startLoading')
    },
    done: () => {

      requestsPending--;
      if (requestsPending <= 0) {
        store.dispatch('template/finishLoading')
      }
    }
  };

  $axios.interceptors.request.use(
    config => {
      // let token = localStorage.getItem('token')
      // if (token) {
      //   config.headers['Authorization'] = 'Bearer ' + token;
      // }
     req.pending();
      return config;
    },
    error => {
     requestsPending--;
      req.done();
      return Promise.reject(error);
    }
  );
  $axios.interceptors.response.use(
    (data) => {
     req.done();
      return Promise.resolve(SuccessResponse(data));
    },
    error => {
     req.done();

      return Promise.resolve(ErrorResponse(error));
    }
  );
}

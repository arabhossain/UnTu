
export const SuccessResponse = function (response){
  return {
    status: response.status,
    statusText: response.statusText,
    request: {
      path: response.config.url,
      data: response.config.data,
      params: response.config.params
    },
    response: {
      status: response?.data?.status,
      result: response?.data
    },
    get data(){
      return response?.data || []
    }
  }
}

export const ErrorResponse = function (response){
  return {
    status: response?.response?.status,
    statusText: response.message,
    request: {
      path: response.config?.url,
      data: response.config?.data,
      params: response.config?.params
    },
    response: {
      status: response?.response?.data?.status || null,
      errors: response?.response?.data?.errors || {},
      message: response?.response?.data?.message || 'Some thing went wrong'
    },
    get errors(){
      return response?.response?.data?.errors || {}
    }
  }
}

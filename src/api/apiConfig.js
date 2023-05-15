const apiConfig = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  originalImage: (imgPath) => `${import.meta.env.VITE_ORIGINAL_IMG}${imgPath}`,
  w500Image: (imgPath) => `${import.meta.env.VITE_W500_IMG}${imgPath}`,
}

export default apiConfig

import { ref } from "vue";

export function useApi() {
  const apiUrl = ref("https://wmp-api-shahid-gds-projects.vercel.app/api/v1");
  // const apiUrl = ref("http://127.0.0.1:3000/api/v1");
  
  const getApiUrl = () => apiUrl.value;

  return { getApiUrl };
}

import { ref } from "vue";

export function useApi() {
//   const apiUrl = ref("https://wmp-api.vercel.app/api/v1/users");
  const apiUrl= ref("http://127.0.0.1:3000/api/v1/users/");
  return { apiUrl };
}
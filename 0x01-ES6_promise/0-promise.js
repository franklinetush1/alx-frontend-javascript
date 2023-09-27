export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const responseData = { message: 'API response' };
      resolve(responseData);
    }, 100);
  });
}

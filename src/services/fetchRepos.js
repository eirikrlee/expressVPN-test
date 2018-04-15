import 'isomorphic-fetch';

export default async () => {
  const response = await fetch('https://api.github.com/search/repositories?q=expressvpn');

  if(response.status !== 200) {
    const error =  new Error(response.statusText);
    error.status = response.status;
    throw(error);
  }
  const result = await response.json();
  return result;
}
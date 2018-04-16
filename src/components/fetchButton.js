import fetchRepos from '../services/fetchRepos';

export default function fetchButton(handleSuccess, handleFailure) {
  const fetchButton = document.createElement('button');
  fetchButton.innerHTML = 'Search Github';
  fetchButton.onclick = async function () {
    try {
      const result = await fetchRepos();
      handleSuccess(result);
      return result;
    } catch (e) {
      handleFailure(e.message);
      return e;
    }
  }

  return fetchButton;
}
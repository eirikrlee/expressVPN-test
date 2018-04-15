import fetchButton from './fetchButton';
import fetchRepos from '../services/fetchRepos';

export default function fetchCountDisplay() {
  const fetchCountDisplay = document.createElement('div');
  const countDisplay = document.createElement('div');
  const onSuccess = (result) => {
    countDisplay.innerHTML = `Result count from searching 'expressvpn': ${result.total_count}`;
  };
  const onFailure = (message) => {
    countDisplay.innerHTML = `Query failed: ${message}`;
  };
  fetchCountDisplay.appendChild(countDisplay);
  fetchCountDisplay.appendChild(fetchButton(onSuccess, onFailure));

  return fetchCountDisplay;
}
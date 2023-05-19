//your code here
function sortBandNames(bandNames) {
  let modifiedBandNames = [];

  for (let i = 0; i < bandNames.length; i++) {
    let modifiedName = bandNames[i].replace(/^(a|an|the)\s+/i, '');
    modifiedBandNames.push(modifiedName);
  }

  modifiedBandNames.sort();

  let ulElement = document.getElementById('band');
  ulElement.innerHTML = '';

  for (let i = 0; i < modifiedBandNames.length; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = modifiedBandNames[i];
    ulElement.appendChild(liElement);
  }
}

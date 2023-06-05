//your code here
function sortBandNames(bandNames) {
  // let modifiedBandNames = [];

  // for (let i = 0; i < bandNames.length; i++) {
  //   let modifiedName = bandNames[i].replace(/^(a|an|the)\s+/i, '');
  //   modifiedBandNames.push(modifiedName);
  // }

  // modifiedBandNames.sort();

  // let ulElement = document.getElementById('band');
  // ulElement.innerHTML = '';

  // for (let i = 0; i < modifiedBandNames.length; i++) {
  //   let liElement = document.createElement('li');
  //   liElement.textContent = modifiedBandNames[i];
  //   ulElement.appendChild(liElement);
  // }
	const articles = ['a', 'an', 'the'];
  
  const sortedNames = bandNames.sort((a, b) => {
    const nameA = removeArticles(a.toLowerCase());
    const nameB = removeArticles(b.toLowerCase());
    return nameA.localeCompare(nameB);
  });
  
  const bandList = document.getElementById('band');
  sortedNames.forEach(name => {
    const listItem = document.createElement('li');
    listItem.innerText = name;
    bandList.appendChild(listItem);
  });
}

function removeArticles(name) {
  articles.forEach(article => {
    if (name.startsWith(article + ' ')) {
      name = name.slice(article.length + 1);
    }
  });
  return name;
}

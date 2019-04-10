var div = document.getElementById('commits');

function loadCommits () {
  fetch("http://gh-commits-category.herokuapp.com/api/categorize-commits/rafaeldelboni/2017", {
    mode: 'cors',
    headers: { 'Access-Control-Allow-Origin':'*' }
  })
    .then(function(resp) {return resp.json();})
    .then(function(data) {
      div.innerHTML = data.feat +
        ' features, ' +
        data.fix +
        ' fixes, ' +
        data.docs +
        ' documents, ' +
        data.refac +
        ' refactorings, ' +
        data.chore +
        ' chores, ' +
        data.test +
        ' tests, ' +
        data.style +
        ' styling and ' +
        data.other +
        ' random stuff';
    })
    .catch(function(error) {
      div.innerHTML = 'error';
      console.log(error);
    });
};

window.onload = function() {
  loadCommits();
};
var form = document.getElementById('form1');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var search = document.getElementById('sear').value;
    var name = search.split(' ').join('');
    alert(name);
    fetch('https://api.github.com/users/' + name).then((result) => result.json())
        .then((data) => {
            console.log(data);
            document.getElementById('result1').innerHTML =` <img src="${data.avatar_url}"/>
            `
            document.getElementById('result2').innerHTML =`  <a target="_blank" href="https://github.com/${name}"> Read More </a>
            `
            


        });
})
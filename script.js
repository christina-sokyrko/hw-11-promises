const button = document.getElementById('press');
const field = document.getElementById('getsign');

function getRandomChinese(length) {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
          let sign = Date.now().toString().slice(-5);
          const signArray = [];
          for (let i = 0; i < length; i++) {
            sign += i;
            signArray.push(String.fromCharCode(sign));
          }
          resolve(signArray.join(''));

        }, length * 50)
  })
}


button.addEventListener('click', () => {
    getRandomChinese(5).then((result) => {
        field.innerHTML = result;
        }
    )
})

console.log(getRandomChinese(5));

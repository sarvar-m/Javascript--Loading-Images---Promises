
const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function(resolve, reject) {
      const image = document.createElement('img');
      image.src = imgPath;

      image.addEventListener('load', function() {
          
        imgContainer.append(image);
        resolve(image);
      });

      image.addEventListener('error', function() {
          reject(new Error('Something went wrong'))
      });
  });
}


//call createImage with then and catch
createImage('images/img-1.jpg')
    .then(img => {
        currentImg = img;
        console.log('Image 1 loaded');
        return waitFor(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('images/img-2.jpg')
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return waitFor(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('images/img-3.jpg')
    })
    .then(img => {
        currentImg = img;
        console.log('Image 2 loaded');
        return waitFor(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(error => {
        console.error(error);
    })

// create a wait function
const waitFor = function (second) {
    return new Promise((resolve) => {
        setTimeout(resolve, second * 1000);
    });
};
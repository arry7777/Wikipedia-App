let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("{ceac67599d8b06eca3a89905504dcc35a767f2f6}", "{LSA7sjw62dhUz77thA5UYUmjhM6ZsGYoYMUw7IBwkk8lxVmmRxge6OQK0NcoaaPZfGlAemFEWXz/QcfNgrDQ2dIXm5FGmltidgxF9fqauxlHQ6MhsLm++3mKoQNbS8Jr}", "{a9d9783e082f768762814486f81f33c7}");

 export function searchVideos() {
      client.request({
  method: 'GET',
  path: '/search'
}, function (error, body, status_code, headers) {
  if (error) {
    console.log(error);
  }

  console.log(body);
})
};
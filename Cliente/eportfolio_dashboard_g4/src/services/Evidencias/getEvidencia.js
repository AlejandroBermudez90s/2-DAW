const getEvidencia = (id) => {

  const URL = `https://mocki.io/v1/1d486ad8-c32a-448d-96d2-1d174a1b2adf/${id}`;

  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => ({}));
}

export default getEvidencia;
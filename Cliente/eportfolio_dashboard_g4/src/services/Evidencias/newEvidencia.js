const newEvidencia = (evidencia_) => {

    const URL = "https://mocki.io/v1/1d486ad8-c32a-448d-96d2-1d174a1b2adf";

    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(evidencia_),
        headers: {
            'Content-type': 'application/json; charset=UTF8'
        }
    })
        .then((response) => response.json())
        .catch((error) => ({}));
}

export default newEvidencia;
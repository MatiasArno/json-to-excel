// Set the URL to fetch for data in JSON format
const URL = 'URL TO REMOTE API';

async function fetchData() {
	const rawData = await fetch(URL);
	const jsonData = await rawData.json();

	return jsonData;
}

// Refactor this function in order to destructuring the wanted data
async function getFormatedData() {
	const data = await fetchData();

    const resultCollection = data.map((client) => {
        const { name, email, company, cellphone, interests, channels } = client;
        return { name, email, company, cellphone, interests, channels };
    });

    return resultCollection;
}

export default getFormatedData;

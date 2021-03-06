async function fetchAPI(uri: string, query: Object){

const res = await fetch(`http://localhost:5000/api/v1/${uri}`,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
});

const json = await res.json();

if(json.errors){
    throw new Error('Failed to fetch API');
}

return json;

}


export async function createMonitaPost(data: Object) {
    
    const response = await fetchAPI("monitas",data);
    return response.message;
}
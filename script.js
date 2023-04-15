

const prompt = document.getElementById("prompt");
const results = document.getElementById("results");

function callGPTAPI() {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '7868651f43msh4eb36e4a4b64bb5p1faed2jsnc991323accbf',
            'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
        },
        body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt.value}"}]}`
    };

    fetch('https://openai80.p.rapidapi.com/chat/completions', options)
    // axios('https://openai80.p.rapidapi.com/chat/completions', options)
        .then(response => response.json())
        .then(response => {
            results.innerText = response.choices[0].message.content;
        })
        .catch(err => console.error(err));
}
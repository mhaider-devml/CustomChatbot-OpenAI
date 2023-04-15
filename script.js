const prompt = document.getElementById("prompt");
const results = document.getElementById("results");

const callGPTAPI = async () => {
    try {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": "7868651f43msh4eb36e4a4b64bb5p1faed2jsnc991323accbf",
                "X-RapidAPI-Host": "openai80.p.rapidapi.com",
            },
            body: `{
                "model":"gpt-3.5-turbo",
                "messages":[{"role":"user",
                            "content":"${prompt.value}"
                        }]
                    }`,
        };

        let response = await fetch(
            "https://openai80.p.rapidapi.com/chat/completions",
            options
        );
        let response1 = await response.json();
        results.innerText = response1.choices[0].message.content;
    }
    catch (error) {
        console.error(error);
        results.innerText = "An error occurred. Please try again later.";
    }
};


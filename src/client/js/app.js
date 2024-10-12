document.getElementById('analyze').addEventListener('click', async () => {
    const articleText = document.getElementById('article').value;

    const response = await fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: articleText }),
    });

    const result = await response.json();
    document.getElementById('result').innerText = JSON.stringify(result, null, 2);
});
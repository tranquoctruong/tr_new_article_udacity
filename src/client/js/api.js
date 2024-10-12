export const fetchSentimentAnalysis = async (text) => {
    debugger
    const response = await fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch sentiment analysis');
    }
    debugger
    return await response.json();
};
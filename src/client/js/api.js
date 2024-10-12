export const fetchSentimentAnalysis = async (text) => {
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
    
    return await response.json();
};
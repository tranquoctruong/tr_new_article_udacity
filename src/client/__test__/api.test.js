import { fetchSentimentAnalysis } from '../js/api'; // Update with the correct path

// Mock the global fetch function
global.fetch = jest.fn();

describe('fetchSentimentAnalysis', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mock history after each test
    });

    test('should fetch sentiment analysis successfully', async () => {
        const mockResponse = {
            sample: { agreement: 'agree', subjectivity: 'subjective', confidence: 'high', irony: 'non-ironic', score_tag: 'positive' }
        };
        
        // Mock fetch to return a successful response
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockResponse),
        });

        const result = await fetchSentimentAnalysis('This is a test text');

        expect(fetch).toHaveBeenCalledWith('/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: 'This is a test text' }),
        });
        
        expect(result).toEqual(mockResponse); // Check the result
    });

    test('should throw an error for an unsuccessful response', async () => {
        // Mock fetch to return an unsuccessful response
        fetch.mockResolvedValueOnce({
            ok: false,
        });

        await expect(fetchSentimentAnalysis('This is a test text')).rejects.toThrow('Failed to fetch sentiment analysis');
    });
});

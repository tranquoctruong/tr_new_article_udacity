import { handleSubmit } from '../js/handleSubmit'; 
import { fetchSentimentAnalysis } from '../js/api';
import { isValid } from '../js/validateUrl';

jest.mock('../js/api'); 
jest.mock('../js/validateUrl');

describe('handleSubmit function', () => {
    let inputElement;
    let errorElement;
    let loaderElement;

    beforeEach(() => {
        document.body.innerHTML = `
            <form>
                <input id="URI" value="" />
                <div id="error" style="display:none;"></div>
                <div id="loader" style="display:none;"></div>
                <ul>
                    <li id="agreement" style="display:none;"></li>
                    <li id="subjectivity" style="display:none;"></li>
                    <li id="confidence" style="display:none;"></li>
                    <li id="irony" style="display:none;"></li>
                    <li id="score_tag" style="display:none;"></li>
                </ul>
            </form>
        `;

        inputElement = document.getElementById('URI');
        errorElement = document.getElementById('error');
        loaderElement = document.getElementById('loader');
    });

    test('should show error for invalid URL', async () => {
        isValid.mockReturnValue(false); // Mock isValid to return false
        inputElement.value = 'invalid-url';

        await handleSubmit({ preventDefault: () => {} });

        expect(errorElement.style.display).toBe('block');
        expect(errorElement.innerHTML).toBe('Please, Enter a valid URL');
        expect(inputElement.value).toBe('invalid-url');
    });
});

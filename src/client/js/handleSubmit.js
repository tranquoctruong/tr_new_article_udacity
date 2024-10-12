import axios from "axios";
import { fetchSentimentAnalysis } from './api';

//calling the isValid function to check invalid url
const { isValid } = require("./validateUrl");

const input = document.getElementById("URI");

//handle input change
document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("change", (e)=>{
        e.preventDefault()
        hide_error()
        show_results(false)
    })
}
)


// handle the submit
async function handleSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("form");

    if (input == null || !isValid(input.value)) {
        show_error();
        document.getElementById("error").innerHTML = "Please, Enter a valid URL";
        return;
    }
    loading(true);
    const data = await fetchSentimentAnalysis(input.value);
    display_results(data);
}

//showing the data on the ui
const display_results = data => {

    loading(false)
    if (data.status.msg) {
        show_error()
        show_results(false)
        document.getElementById("error").innerHTML = `${data.status.msg}`;

        return;
    }
    hide_error()
    show_results(true)

    document.getElementById("agreement").innerHTML = `Agreement: ${data.sample.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.sample.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.sample.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.sample.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.sample.score_tag}`;
}


const loading = (bool) => {
    // loader
    const loader = document.getElementById('loader');
    //
    if (bool) {
        // Show the loader
        loader.style.display = 'block';
        return;
    }
    //hide the loader
    loader.style.display = 'none';

}

const show_results = (bool) => {
    if (bool) {
        document.querySelectorAll("ul li").forEach(element => {
            element.style.display = "block"
        })
        return;
    }
    document.querySelectorAll("ul li").forEach(element => {
        element.style.display = "none"
    })
    return;
}

const show_error = () => document.getElementById("error").style.display = "block";
const hide_error = () => document.getElementById("error").style.display = "none";

export { handleSubmit }

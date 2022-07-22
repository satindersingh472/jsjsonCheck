
let user_selection_json = Cookies.get(`user_selection`);
let selection_data = JSON.parse(user_selection_json);
    document.getElementById(`box`)[`innerHTML`] = 
    `
    <section>
    <h1> ${selection_data[`title`]}</h1>
    <p>${selection_data[`description`]}</p>
    <h4>${selection_data[`price`]}</h4>
    <img src="${selection_data[`image_url`]}"/>

    </section>
    `;



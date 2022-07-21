let selection = {
    title: `knowledge check`,
    price: 500,
    image_url: `https://images.unsplash.com/photo-1658255324994-a2c26dd3009a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`,
    description: `random image`
}
let selection_json = JSON.stringify(selection);
Cookies.set(` user_selection` , selection_json);
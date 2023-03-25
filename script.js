function SearchPhotos() {

    // API access key
    let clientId = "ULUqcyGtSzEiYeyIJMZQo8U8kcLK-l6UEpFluEcyrhs";

    // handle for input tag with id "search-bar" to get the search query entered by the user
    let query = document.getElementById("search-bar").value;

    // URL of Unsplash API
    let url = "https://api.unsplash.com/search/photos/?client_id=ULUqcyGtSzEiYeyIJMZQo8U8kcLK-l6UEpFluEcyrhs&query="+query;
    
    //declare result variable
    let result;

    //Use Fetch API to asynchronously fetch images data from the Unsplash API
    fetch(url)
    .then(function(data){
    
        //return JSON data 
        return data.json();
    })
    .then(function(data){
        
        // empty the previous search result in before displaying the new one
        $("#container").empty()

        //iterate over all the images in the JSON data
        data.results.forEach(photo =>{

            //create an img element and wrap it in anchor tag to dispay it on the web browser
            result = `
                <div class="col">
                    <a href="${photo.links.download}"  data-lightbox="models" data-title=${photo.alt_description}>
                        <img src="${photo.urls.thumb}" class="tiles">
                    </a>
                </div>
            `;

            // append the newly created result element in div with id as "container"
            $("#container").append(result); 
        });
    });
} 



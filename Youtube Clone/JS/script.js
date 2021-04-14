$(document).ready(function(){
    var API_KEY = "AIzaSyDDp4UYcz4_5pA1ViXcj1wWEwDXG44kAiM"

    var video = ''


    $("#form").search(function(event){
        event.preventDefault()

        var header__search = $("#header__search").val()

        videoSearch(API_KEY,header__search,20)
    })

    function videoSearch(key, header__search, maxResults) {
        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key
        + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + header__search,function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `

                <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>                
                `
                $("videos").append(video)
            })
        })
    }
})

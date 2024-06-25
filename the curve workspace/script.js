document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer'); 
    const videoList = document.getElementById('videoList');

    // Arrays of the video URLs
    const videos = [
        {title: '01. walking in shadows.', src: 'videos/jack01.mp4'},
        {title: '02. vikings.', src: 'videos/jack05.mp4'},
        {title: '03. memories of us.', src: 'videos/jack03.mp4'},
    ];

    // function that create video list items
    function createVideoListItem(video) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href ='#';
        link.textContent = video.title;  //?
        link.setAttribute('data-video', video.src);  //?
        listItem.appendChild(link);
        return listItem;
    }

    // populate the video list
    videos.forEach(video => {
        const listItem = createVideoListItem(video);
        videoList.appendChild(listItem)
    });

    // Add click event listener to the video list items
    videoList.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target;
        if (target.tagName === 'A') {
            const videoSource = target.getAttribute('data-video');
            videoPlayer.src = videoSource;
            videoPlayer.play();
        }
    });

});


//1 .addEventListener()  is a method used to attach an event listner to an HTML element. This listener waits for a specific event to occur(like a click, hover etc) then execute a specific function. it makes the page interactive by enabling responces to user action

//1 the DOMcontent....  is an event in JavaScript that fires when the HTML document is loaded without waiting for the stylesheet, images, to finish loading

//13 function are block of reuseable code or calculation
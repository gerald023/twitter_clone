const makePost = document.querySelector('#makePost')
const form = document.querySelector('#form')
const postList = document.querySelector('.post_list')
const tweet = document.querySelector('#tweet')
tweet.addEventListener('click', (e)=>{
    e.preventDefault();
    // e.target(tweet)

    if (makePost.value =='') {
        makePost.value=''
        tweet.style.backgroundColor=' rgb(159, 204, 234)'
    }
    // else if (makePost.value =' ') {
    //     tweet.style.backgroundColor=' rgb(159, 204, 234)'
    // }
    else{
        postList.innerHTML +=  `
        <div class="tweets tweet_post">
        <div class="posts">
            <div class="imgs">
                <a href="">
                <img src="/images/pp_9.jpg" alt="">
                <p></p>
            </a>
            </div>
            <div class="texts">
                <div class="title">
                    <a href="">
                        <div class="verify">
                        <h4>
                            <p>Gerald Lekara</p>
                        </h4>
                        <p>@LG · </p>
                        </div>
                        <p>1s</p>
                    </a>
                    <div class="ellipse">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div class="write_up">
                    <p>${makePost.value}</p>
                </div>
                <div class="react">
                    <div class="comment">
                        <i class="fa-regular fa-comment"></i>
                        <p>0</p>
                    </div>
                    <div class="retweet">
                        <i class="fa-solid fa-retweet"></i>
                        <p>0</p>
                    </div>
                    <div class="love">
                        <i class="fa-regular fa-heart"></i>
                        <p>0</p>
                    </div>
                    <div class="view">
                        <i class="fa-solid fa-chart-simple"></i>
                        <p>0</p>
                    </div>
                    <div class="share">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
        makePost.value=''
        if (makePost.value =='') {
            tweet.style.backgroundColor = ' rgb(29, 155, 240)'
        }
        
    }
})
let inputvalue = makePost.value
makePost.addEventListener('input',()=>{
    if (makePost.value !=='') {
        tweet.style.backgroundColor = ' rgb(29, 155, 240)'
    }
   else {
        tweet.style.backgroundColor=' rgb(159, 204, 234)'
    }
})
// console.log(makePost.value);
// console.log(postList);
console.log(tweet);
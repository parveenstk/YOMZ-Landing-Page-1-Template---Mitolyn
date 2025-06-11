// Date function 
const dateElement = document.getElementById("current-date");
const now = new Date();
const options = { month: 'long', year: 'numeric' };
const formattedDate = now.toLocaleDateString('en-US', options);

dateElement.textContent = formattedDate;

// viday play/play functionality
const video = document.getElementById("myVideo"); const icon = document.getElementById("playPauseIcon");
function togglePlayPause() {
    if (video.paused) {
        video.play();
        icon.src = "images/pluse.png";
    } else {
        video.pause();
        icon.src = "images/play.webp";
    }
}

// links re-direction function
const links = {
    "link-1": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8230287/",
    "link-2": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6888526/",
    "link-3": "https://pubmed.ncbi.nlm.nih.gov/15637215/",
    "link-4": "https://www.sciencedirect.com/science/article/abs/pii/S0963996924010688",
    "link-5": "https://www.efsa.europa.eu/en/news/titanium-dioxide-e171-no-longer-considered-safe-when-used-food-additive",
    "link-6": "https://pubmed.ncbi.nlm.nih.gov/20119826/",
    "link-7": "https://www.medicalnewstoday.com/articles/319299",
    "link-8": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10969708/",
    "link-9": "https://journals.sagepub.com/doi/10.1177/026010600301700201",
    "link-10": "https://www.sciencedirect.com/science/article/abs/pii/S0946672X08000679?via%3Dihub",
    "link-11": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4951875/",
    "link-12": "https://www.nih.gov/news-events/nih-research-matters/how-dietary-factors-influence-disease-risk"
};

for (const [id, url] of Object.entries(links)) {
    const link = document.getElementById(id);
    if (link) {
        link.href = url;
        link.target = "_blank";
    }
}

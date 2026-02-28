const videos = [
  {
    title: "Petualangan di Gunung",
    src: "videos/sample1.mp4",
    thumb: "thumbs/thumb1.jpg"
  },
  {
    title: "Gameplay Seru",
    src: "videos/sample2.mp4",
    thumb: "thumbs/thumb2.jpg"
  },
  {
    title: "Tutorial Coding",
    src: "videos/sample3.mp4",
    thumb: "thumbs/thumb3.jpg"
  },
  {
    title: "Vlog Santai",
    src: "videos/sample4.mp4",
    thumb: "thumbs/thumb4.jpg"
  }
];

const grid = document.getElementById("videoGrid");
const player = document.getElementById("videoPlayer");
const title = document.getElementById("videoTitle");
const search = document.getElementById("searchInput");

function loadVideos(list) {
  grid.innerHTML = "";

  list.forEach(video => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${video.thumb}">
      <h4>${video.title}</h4>
    `;

    card.onclick = () => {
      player.src = video.src;
      title.textContent = video.title;
      player.play();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    grid.appendChild(card);
  });
}

// SEARCH FUNCTION

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();

  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(keyword)
  );

  loadVideos(filtered);
});

// INITIAL LOAD

loadVideos(videos);
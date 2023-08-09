const allPosts = [
  {
    title: "Mastering Responsive Web Design: Building Sites for All Devices",
    label: "Masterclass",
    thumbnail: "images/1.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore quaerat repellat blanditiis ullam amet.",
    link: "#",
  },

  {
    title: "CSS Grid Simplified - Updated",
    label: "Development",
    thumbnail: "images/2.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore quaerat repellat blanditiis ullam amet.",
    link: "#",
  },

  {
    title: "Faster Websites: Performance Tips",
    label: "Optimization",
    thumbnail: "images/3.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore quaerat repellat blanditiis ullam amet.",
    link: "#",
  },

  {
    title: "Front-End Framework Comparison",
    label: "Development",
    thumbnail: "images/4.jpg",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore quaerat repellat blanditiis ullam amet.",
    link: "#",
  },
];

const blogPostsContainer = document.querySelector(".blog-posts-container");

const generatePostsHTML = () => {
  allPosts.forEach((p) => {
    const HTML = `<div class="thumbnail">
        <img src="${p.thumbnail}" alt="" />
      </div>

      <div class="text-content">
        <div class="label">${p.label}</div>
        <h3 class="post-title">
          ${p.title}
        </h3>
        <div class="summary">
          ${p.summary}
        </div>
        <a class="read-more-btn" href="${p.link}">Read More...</a>
      </div>`;

    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");
    blogPost.innerHTML = HTML;

    blogPostsContainer.appendChild(blogPost);
  });
};

generatePostsHTML();

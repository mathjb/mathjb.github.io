// script.js

// Example of dynamically loading blog posts (assuming you add more posts in the future)
document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        { title: "Example Post", link: "posts/example-post.html" }
        // Add more posts here
    ];

    const postList = document.getElementById("post-list");
    posts.forEach(post => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = post.link;
        link.textContent = post.title;
        listItem.appendChild(link);
        postList.appendChild(listItem);
    });
});

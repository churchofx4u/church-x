const post = document.querySelector("#post");
const shareX = document.querySelector("#share-x");
if (shareX) shareX.href = "https://x.com/intent/post?text=" + encodeURIComponent(post.textContent);

document.querySelector("#copy-post").onclick = async () => {
  const note = document.querySelector("#copied");
  try {
    await navigator.clipboard.writeText(post.textContent);
    note.textContent = "Copied ✓";
  } catch (err) {
    note.textContent = "Select the post and copy it.";
  }
  note.hidden = false;
};

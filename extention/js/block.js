var comment_section = document.body.getElementsByTagName("ytd-comments"), index;

for (index = comment_section.length - 1; index >= 0; index--) {
    comment_section[index].parentNode.removeChild(comment_section[index]);
}
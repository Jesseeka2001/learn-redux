
export const highlightSelection = (props) => {
    const tags = document.querySelectorAll('.tag');

    tags.forEach(tag => {
        tag.classList.remove('highlight')
    })
    if (props.length !== 0) {
        props.forEach(id => {
            const hightlightedTag = document.getElementById(id);
            hightlightedTag.classList.add('highlight');
        })
    }
}
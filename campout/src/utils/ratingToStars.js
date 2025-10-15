const ratingToStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

export default ratingToStars;
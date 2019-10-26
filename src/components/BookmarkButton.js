import React from "react";
import {
  BookmarkBorder,
  Bookmark,
} from "@material-ui/icons/";

const BookmarkButton = props => {
  const {bookmark, isBookmarked} = props;

  return (
    <div onClick={bookmark} className="bookmark-button">
      {isBookmarked ? (
        <Bookmark fontSize="large" />
      ) : (
        <BookmarkBorder fontSize="large" />
      )}
    </div>
  );
};

export default BookmarkButton;

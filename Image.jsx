import React from "react";

// this component only handles the image render
// and posible errors
function Image({ height, width, url, alt }: Props) {
  const fallBackImage = `https://via.placeholder.com/${width}x${height}`;

  if (!url) {
    return <img className={styles.img} src={fallBackImage} />;
  }

  return (
    <img
    className={styles.img}
      alt={alt && ""}
      src={url}
      height={height}
      width={width}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallBackImage;
      }}
    />
  );
}

export default Image;

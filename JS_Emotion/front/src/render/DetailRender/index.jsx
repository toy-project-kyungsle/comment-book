import React from 'react';

function DetailRender({ title, coverImg, priceStandard, priceSales, author, description, link, pubDate }) {
  return (
    <div>
      <div>
        <div>
          <img src={coverImg} alt={title} />
        </div>
        <div>
          <div>
            <div>
              <h3>
                <a href={link}>{title}</a>
              </h3>
            </div>
          </div>
          <p>{priceStandard ? `price: ${priceStandard}` : null}</p>
          <p>{priceSales ? `discount: ${priceSales} ` : null}</p>
          <p>{author ? `author: ${author} ` : null}</p>
          <p>{pubDate ? `pubdate: ${pubDate} ` : null}</p>
          <p>{description ? (description.length > 180 ? `${description.slice(0, 180)}...` : description) : null}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailRender;

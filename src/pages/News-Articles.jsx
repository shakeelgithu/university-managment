import React from "react";
// import { FaArrowRight } from 'react-icons/fa';


function Article() {
  // const [isHovered, setIsHove] = useState(false); // Moved inside the component
  // const [hovered, setHovered] = useState(false); // Moved inside the component

  return (
    <div>
<div class="news-section py-5">
  <div class="container">
    <h2 class="section-title text-center mb-5">Latest News Articles</h2>

    <div class="news-article mb-5">
      <img
        src="https://via.placeholder.com/800x400"
        class="news-img img-fluid"
        alt="news-thumbnail"
      />
      <div class="news-content mt-3">
        <h3 class="news-title">News Article Title 1</h3>
        <p class="news-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
          ut mauris a nisi varius gravida. Morbi ultricies felis vitae magna 
          auctor interdum. Praesent luctus diam vel nulla consequat, vitae 
          tincidunt lorem tincidunt. Curabitur tristique eu nisl ut rutrum...
        </p>
        <a href="/" class="btn btn-primary">Read More</a>
      </div>
    </div>

    <div class="news-article mb-5">
      <img
        src="https://via.placeholder.com/800x400"
        class="news-img img-fluid"
        alt="news-thumbnail"
      />
      <div class="news-content mt-3">
        <h3 class="news-title">News Article Title 2</h3>
        <p class="news-description">
          Fusce vel orci ac orci consequat pretium. Ut scelerisque, sem et 
          varius vehicula, libero est ultrices eros, at volutpat odio magna 
          nec nisl. Integer faucibus consectetur sem sit amet mollis...
        </p>
        <a href="/" class="btn btn-primary">Read More</a>
      </div>
    </div>

    <div class="news-article mb-5">
      <img
        src="https://via.placeholder.com/800x400"
        class="news-img img-fluid"
        alt="news-thumbnail"
      />
      <div class="news-content mt-3">
        <h3 class="news-title">News Article Title 3</h3>
        <p class="news-description">
          Donec nec nisl nisi. Mauris consequat, enim sit amet suscipit mollis, 
          justo sapien interdum leo, nec vulputate mauris lacus sit amet augue. 
          Suspendisse potenti. Phasellus interdum ut libero sit amet fermentum...
        </p>
        <a href="/" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default Article;

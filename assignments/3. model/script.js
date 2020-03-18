let data = [
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494464667397.png",
      name: "Carwash", 
      category: "Painting"
    },
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494528264937.png",
      name: "Muck Mouth",
      category: "Painting"
    },
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494528646446.png",
      name: "Fishwall",
      category: "Painting"
    },
    {
      image: "http://data.mavo.io/portfolio/images/web-coffe-marilyn.jpg",
      name: "Web Coffe Marilyn",
      category: "Painting"
    },
    {
      image:
        "http://data.mavo.io/portfolio/images/pasted-image-1494903924970.png",
      name: "Web 3 Jules",
      category: "Painting"
    },
    {
      image: "http://data.mavo.io/portfolio/images/web-electric3.jpg",
      name: "Web electric3",
      category: "Painting"
    }
  ];
    let section = document.querySelector(".gallery");
    data.forEach((data,i) => {
        let div = document.createElement("div");
        div.classList.add("image-container");
        let img = document.createElement("img");
        img.classList.add("image");
        let button = document.createElement("button");
        button.addEventListener("click", modal);
        button.classList.add("btn");
        button.textContent = "Enlarge";
        img.src = data.image;
        button.id = i;
        div.append(img,button);
        section.append(div);
    });

function modal(event) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    let img = document.createElement("img");
    img.src = data[event.target.id].image;
    modal.append(img);
    document.body.append(modal);
}
const memoryCard = () => {
  const $head = document.querySelector("head");
  const $styles = document.createElement("style");
  $styles.textContent = `
    
.memory-card {
  position: relative;
  width: 155px;
  height: 155px;
  background-color: #f25a70;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  cursor: pointer;
}

.memory-card.-front {
  background-color: #fff;
}

.memory-card.-front::before {
  content: "";
  height: 95px;
  width: 95px;
  background-color: rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  position: absolute;
}

.memory-card > .icon {
  width: 100px;
  height: 100px;
}

.memory-card.-front > .icon {
  position: absolute;
  transform: translateY(-12px)
}

.memory-card > .icon.-active,
.memory-card.-front > .icon{
  display:none;
}
  
.memory-card.-front > .icon.-active{
  display:block;
}
  `;
  $head.insertBefore($styles, null);

  return ({ src, alt, nameClass = "" }) => `<article 
    class="memory-card ${nameClass}"
    onclick="handleClick(this)">
        <img 
          class='icon -active'
          src='${src}'
          alt=${alt}
        />
        <img 
          class='icon'
          src='img/icon-collabcode.png'
          alt='Gueio mascote da CollabCode'
        />
  </article>`;
};

const handleClick = (element, src) => {
  console.log(element);
  element.classList.toggle("-front");
};

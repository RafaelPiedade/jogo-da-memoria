const layerStart = (() => {
  const module = {};

  module.render = content => {
    const $transparencyLayer = transparencyLayer.render();
    const $gameButton = gameButton.render(content);

    
    return `
    <div class="layer-start" onClick="layerStart.handleClick(this)">
        ${$transparencyLayer}
        ${$gameButton}
    </div>
    `;
  };

  module.handleClick = ($component)=>{
      $component.remove()
  }

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
